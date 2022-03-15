{
    const fieldName = [
        "name",
        "postal",
        "email",
        "url",
    ];

    const showErrorMessage = fieldError => {
        document.querySelector(`.js-${fieldError}TextError`).classList.add("form__error--show");
    }

    const hiddenErrorMessage = fieldError => {
        document.querySelector(`.js-${fieldError}TextError`).classList.remove("form__error--show");
    }

    const validateForm = fieldValues => {
        const regexp = [
            /^[a-z-zżźćńółęąś]{2,}$/gi,
            /^\d{2}-\d{3}$/g,
            /^[a-z\d-]+\w?\.?([\w\d-]+)?@[\w\d-]{2,}\.[a-z]{2,6}(\.[a-z]{2,6})?$/gi,
            /^([https://|http://])+www\.([a-z\d_-]?){2,}\.[a-z]{2,5}(\.[a-z]{2,5})?$/gi,
        ];

        fieldValues.forEach((fieldValue, index) => {
            regexp[index].test(fieldValue) ? hiddenErrorMessage(fieldName[index]) : showErrorMessage(fieldName[index]);
        });
    }

    const onFormSubmit = event => {
        event.preventDefault();

        const fieldValues = [];
        for(const name of fieldName) {
            fieldValues.push(document.querySelector(`.js-${name}`).value.trim());
        }
        
        validateForm(fieldValues);
    }

    const init = () => {
        const formSendElement = document.querySelector(".js-submitForm");
        formSendElement.addEventListener("click", onFormSubmit);
    }

    init();
}