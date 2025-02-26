const showModalButton = document.querySelector(".show-modal-btn");
const bottomSheetContainer = document.querySelector(
  ".bottom-sheet-container"
);
const sheetOverlay = bottomSheetContainer.querySelector(".sheet-overlay");
const sheetContent = bottomSheetContainer.querySelector(".sheet-content");
const dragIcon = bottomSheetContainer.querySelector(".drag-icon");

let isDragging = false,
  startY,
  startHeight;

const showBottomSheet = () => {
  bottomSheetContainer.classList.add("show");
  document.body.style.overflowY = "hidden";
  updateSheetHeight(50);
};

const updateSheetHeight = (height) => {
  sheetContent.style.height = `${height}vh`;
  bottomSheetContainer.classList.toggle("fullscreen", height === 100);
};

const hideBottomSheet = () => {
  bottomSheetContainer.classList.remove("show");
  document.body.style.overflowY = "auto";
};

const dragStart = (e) => {
  isDragging = true;
  startY = e.pageY || e.touches?.[0].pageY;
  startHeight = parseInt(sheetContent.style.height);
  bottomSheetContainer.classList.add("dragging");
};

const dragging = (e) => {
  if (!isDragging) return;
  const delta = startY - (e.pageY || e.touches?.[0].pageY);
  const newHeight = startHeight + (delta / window.innerHeight) * 100;
  updateSheetHeight(newHeight);
};
const dragStop = () => {
  isDragging = false;
  bottomSheetContainer.classList.remove("dragging");
  const sheetHeight = parseInt(sheetContent.style.height);
  sheetHeight < 25
    ? hideBottomSheet()
    : sheetHeight > 75
    ? updateSheetHeight(100)
    : updateSheetHeight(50);
};

dragIcon.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

dragIcon.addEventListener("touchstart", dragStart);
document.addEventListener("touchmove", dragging);
document.addEventListener("touchend", dragStop);

sheetOverlay.addEventListener("click", hideBottomSheet);
showModalButton.addEventListener("click", showBottomSheet);