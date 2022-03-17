{
    const sendForm = isValidate => {
        const textSendForm = document.querySelector(`.form__success`);
        if (isValidate) {
            textSendForm.classList.add(`form__success--show`);
        } else {
            textSendForm.classList.remove(`form__success--show`);
        }
    }

    const showErrorMessage = fieldName => {
        document.querySelector(`.js-${fieldName}TextError`).classList.add("form__error--show");
    }

    const hideErrorMessage = fieldName => {
        document.querySelector(`.js-${fieldName}TextError`).classList.remove("form__error--show");
    }

    const validateForm = values => {
        const regexp = {
            name: /^[a-z-żźćńółęąś]{2,}$/gi,
            postal: /^\d{2}-\d{3}$/g,
            email: /^[a-z\d-]+\w?\.?([\w\d-]+)?@[\w\d-]{2,}\.[a-z]{2,6}(\.[a-z]{2,6})?$/gi,
            url: /^([https://|http://])+www\.([a-z\d_-]?){2,}\.[a-z]{2,5}(\.[a-z]{2,5})?$/gi,
        };

        let isValidate = true;
        for (const fieldName in values) {
            if (regexp[fieldName].test(values[fieldName])) {
                hideErrorMessage(fieldName);
            } else {
                showErrorMessage(fieldName);
                isValidate = false;
            }
        }
        sendForm(isValidate);
    }

    const onFormSubmit = event => {
        event.preventDefault();

        const values = {
            name: document.querySelector(`.js-name`).value.trim(),
            postal: document.querySelector(`.js-postal`).value.trim(),
            email: document.querySelector(`.js-email`).value.trim(),
            url: document.querySelector(`.js-url`).value.trim(),
        };
        validateForm(values);
    }

    const init = () => {
        const formSendElement = document.querySelector(".js-submitForm");
        formSendElement.addEventListener("click", onFormSubmit);
    }

    init();
}