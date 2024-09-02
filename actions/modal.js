function showModal(title, message) {
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');

    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.classList.add('hidden');
}

document.getElementById('closeModal').addEventListener('click', closeModal);
