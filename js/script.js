{
    const sendForm = validate => {
        const textSendForm = document.querySelector(`.form__success`);
        validate ? textSendForm.classList.add(`form__success--show`) : textSendForm.classList.remove(`form__success--show`);
    }

    const showErrorMessage = fieldError => {
        document.querySelector(`.js-${fieldError}TextError`).classList.add("form__error--show");
    }

    const hideErrorMessage = fieldError => {
        document.querySelector(`.js-${fieldError}TextError`).classList.remove("form__error--show");
    }

    const validateForm = values => {
        const regexp = {
            name: /^[a-z-zżźćńółęąś]{2,}$/gi,
            postal: /^\d{2}-\d{3}$/g,
            email: /^[a-z\d-]+\w?\.?([\w\d-]+)?@[\w\d-]{2,}\.[a-z]{2,6}(\.[a-z]{2,6})?$/gi,
            url: /^([https://|http://])+www\.([a-z\d_-]?){2,}\.[a-z]{2,5}(\.[a-z]{2,5})?$/gi,
        };

        let validate = true;
        for(const propertyValue in values) {
            if(regexp[propertyValue].test(values[propertyValue])) {
                hideErrorMessage(propertyValue);
            } else {
                showErrorMessage(propertyValue);
                validate = false;
            }
        }

        sendForm(validate);
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