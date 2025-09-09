document.addEventListener('DOMContentLoaded', function() {
    const filterBoxes = document.querySelectorAll('.chat__filters-box');

    filterBoxes.forEach(box => {
        const allCheckbox = box.querySelector('.chat__filters-all input[type="checkbox"]');
        const itemCheckboxes = box.querySelectorAll('.chat__filters-item input[type="checkbox"]');
        allCheckbox.addEventListener('change', function() {
            const isChecked = this.checked;
            itemCheckboxes.forEach(checkbox => {
                checkbox.checked = isChecked;
            });
        });
        
        itemCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (!this.checked) {
                    allCheckbox.checked = false;
                }
                const allItemsChecked = Array.from(itemCheckboxes).every(cb => cb.checked);
                if (allItemsChecked) {
                    allCheckbox.checked = true;
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const filterNames = document.querySelectorAll('.chat__filters-name');
    filterNames.forEach(name => {
        name.addEventListener('click', function() {
            const filterBox = this.closest('.chat__filters-box');
            if (filterBox && filterBox.classList.contains('chat__filters-more')) {
                filterBox.classList.toggle('show');
            }
        });
    });
});



const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const lowBalance = document.querySelector('.lowbalance');
const lowBalanceClose = document.querySelector('.lowbalance__close');
chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const userMessage = messageInput.value.trim();
    if (!userMessage) return;
    lowBalance.classList.add('show');
});

lowBalanceClose.addEventListener('click', function() {
    lowBalance.classList.remove('show');
});