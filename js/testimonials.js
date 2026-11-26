(() => {
  const form = document.querySelector("#feedback-form");
  const list = document.querySelector("#testimonials-list");
  const status = document.querySelector("#feedback-status");
  if (!form || !list || !status) return;

  const client = window.ninaSupabase;
  if (!client) {
    status.textContent = "The feedback service could not load. Please refresh and try again later.";
    return;
  }

  const setStatus = (message) => {
    status.textContent = message;
    status.setAttribute("role", "status");
  };

  const renderReviews = (reviews) => {
    list.replaceChildren();
    if (!reviews.length) {
      const empty = document.createElement("p");
      empty.className = "notice";
      empty.textContent = "No testimonials have been shared yet. Be the first to leave feedback!";
      list.appendChild(empty);
      return;
    }

    reviews.forEach((review) => {
      const card = document.createElement("article");
      card.className = "content-card";
      card.style.marginTop = "14px";

      const name = document.createElement("h3");
      name.textContent = review.customer_name;

      const message = document.createElement("p");
      message.textContent = review.feedback;

      const date = document.createElement("small");
      date.textContent = review.created_at
        ? new Date(review.created_at).toLocaleDateString()
        : "";

      card.append(name, message, date);
      list.appendChild(card);
    });
  };

  const loadReviews = async () => {
    list.setAttribute("aria-busy", "true");
    const { data, error } = await client
      .from("testimonials")
      .select("id, customer_name, feedback, created_at")
      .eq("published", true)
      .order("created_at", { ascending: false });

    list.removeAttribute("aria-busy");
    if (error) {
      console.error("Could not load testimonials:", error);
      list.textContent = "Testimonials could not be loaded right now. Please refresh the page.";
      return;
    }
    renderReviews(data || []);
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nameInput = form.elements.namedItem("name");
    const feedbackInput = form.elements.namedItem("feedback");
    const customer_name = nameInput.value.trim();
    const feedback = feedbackInput.value.trim();

    if (customer_name.length < 2 || customer_name.length > 60) {
      setStatus("Please enter a display name between 2 and 60 characters.");
      return;
    }
    if (feedback.length < 5 || feedback.length > 1500) {
      setStatus("Please enter feedback between 5 and 1,500 characters.");
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    setStatus("Submitting your feedback…");

    const { error } = await client.from("testimonials").insert({
      customer_name,
      feedback,
      published: true
    });

    submitButton.disabled = false;

    if (error) {
      console.error("Feedback submission failed:", error);
      setStatus("Your feedback could not be submitted. Please try again later.");
      return;
    }

    form.reset();
    setStatus("Thank you! Your feedback has been submitted and is now public.");
    await loadReviews();
  });

  loadReviews();
})();
