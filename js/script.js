{
    const showErrorMessage = fieldError => {
        document.querySelector(`.js-${fieldError}TextError`).classList.add("form__error--show");
    }

    const checkValues = fieldValues => {
        const regexp = [
            /^[a-z-zżźćńółęąś]{2,}$/gi,
            /^\d{2}-\d{3}$/g,
            /^[a-z\d-]+\w?\.?([\w\d-]+)?@[\w\d-]{2,}\.[a-z]{2,6}(\.[a-z]{2,6})?$/gi,
            /^([https://|http://])+www\.([a-z\d_-]?){2,}\.[a-z]{2,5}(\.[a-z]{2,5})?$/gi,
        ];

        const fieldError = [
            "name",
            "postal",
            "email",
            "url",
        ];

        fieldValues.forEach((fieldValue, index) => {
            regexp[index].test(fieldValue) 
                ? document.querySelector(`.js-${fieldError[index]}TextError`).classList.remove("form__error--show")
                : showErrorMessage(fieldError[index]);
        });
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const fieldNameElement = document.querySelector(".js-name").value.trim(); 
        const fieldPostalElement = document.querySelector(".js-postal").value.trim(); 
        const fieldEmailElement = document.querySelector(".js-email").value.trim(); 
        const fieldUrlElement = document.querySelector(".js-url").value.trim(); 

        const fieldValues = [
            fieldNameElement,
            fieldPostalElement,
            fieldEmailElement,
            fieldUrlElement,
        ];

        checkValues(fieldValues);
    }

    const init = () => {
        const formSendElement = document.querySelector(".js-submitForm");
        formSendElement.addEventListener("click", onFormSubmit);
    }

    init();
}