$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();
        
        // Валидация e-mail
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var email = $('#email').val();
        if (!emailPattern.test(email)) {
            alert('Пожалуйста, введите корректный e-mail.');
            return;
        }

        // Валидация телефона (пример: +7 (123) 456-78-90)
        var phonePattern = /^\+?[0-9\s\-\(\)]+$/;
        var phone = $('#phone').val();
        if (!phonePattern.test(phone)) {
            alert('Пожалуйста, введите корректный телефон.');
            return;
        }

        // Валидация имени (только буквы)
        var namePattern = /^[a-zA-Zа-яА-Я\s]+$/;
        var name = $('#name').val();
        if (!namePattern.test(name)) {
            alert('Пожалуйста, введите корректное имя.');
            return;
        }

        // Проверка согласия на обработку персональных данных
        if (!$('#agreement').is(':checked')) {
            alert('Пожалуйста, подтвердите согласие на обработку персональных данных.');
            return;
        }

        // Если все проверки пройдены, отправляем форму
        alert('Форма успешно отправлена!');
        this.submit();
    });
});