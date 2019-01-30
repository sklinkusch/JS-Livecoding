const list = document.querySelector("ul");

list.addEventListener("click", e => {
  // We check if the clicked element or one of its parents has the
  // class "deleted", as we might have more design elements inside
  // a fancy button, etc.
  if (e.target.closest(".delete")) {
    // We stop to propagate the event to more parents, as we
    // already handle it in the next steps.
    e.stopPropagation();

    // We get the parent list element, related to the element
    // that was clicked.
    const item = e.target.closest("li");

    // We would delete this item now
    console.log("delete", item);
  } else if (e.target.closest(".edit")) {
    e.stopPropagation();
    const item = e.target.closest("li");
    console.log("edit", item);
  } else if (e.target.closest(".remove-image")) {
    e.stopPropagation();
    const item = e.target.closest("li");
    const imageId = item.getAttribute("data-image");

    console.log("remove image", imageId);

    const image = document.getElementById(imageId);
    image.parentElement.removeChild(image);
  }
});
