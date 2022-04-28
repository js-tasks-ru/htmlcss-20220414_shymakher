(function () {
  const close = document.getElementById('modal-close');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const modalOpen = document.getElementById('modal-open');

  if (!close || !modalOpen || !modal) {
    return;
  }

  modalOpen.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'initial';
  });

  modal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'initial';
  });

  // close modal by clicking on the grey modal`s background
  modalContent.addEventListener('click', (event) => {
    event.stopPropagation();
  });
})();
