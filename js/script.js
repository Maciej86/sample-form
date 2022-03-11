{
    const infoError = (inputClass, error_paragraph) => {
        error_paragraph.classList.remove("sectionForm__response--success");
        error_paragraph.classList.add("sectionForm__response--error");
        error_paragraph.innerText = "";
        switch(inputClass) {
            case "textCode":
                error_paragraph.innerText = "The given name is incorrect.";
                break;
            case "postalCode":
                error_paragraph.innerText = "An incorrect postal code format was specified - 64-300";
                break;
            case "urlCode":
                error_paragraph.innerText = "The given url is invalid - https://www.google.pl";
                break;
            case "emailCode":
                error_paragraph.innerText = "The e-mail address provided is invalid - script@gmail.com";
                break;
        }
    }
    
	const validationSuccess = error_paragraph => {
		error_paragraph.classList.remove("sectionForm__response--error");
		error_paragraph.classList.add("sectionForm__response--success");
        error_paragraph.innerText = "Formularz został poprawnie wypełniony";
	}

    const checkValue = (inputElement, arrayClass) => {
        const error_paragraph = document.querySelector(".sectionForm__response");
        for(let i = 0; i <= inputElement.length - 1; i++) {
            switch(arrayClass[i]) {
                case "textCode":
                    const textRegexp = /^[a-z-zżźćńółęąś]{2,}$/gi;
                    if(!textRegexp.test(inputElement[i])) {
                        infoError(arrayClass[i], error_paragraph);
                        return;
                    }
                    break;
                case "postalCode":
                    const zipCodeRegexp = /^\d{2}-\d{3}$/g;
                    if(!zipCodeRegexp.test(inputElement[i])) {
                        infoError(arrayClass[i], error_paragraph);
                        return;
                    }
                    break;
                case "urlCode":
                    const urlRegexp = /^([https://|http://])+www\.([a-z\d_-]?){2,}\.[a-z]{2,5}(\.[a-z]{2,5})?$/gi;
                    if(!urlRegexp.test(inputElement[i])) {
                        infoError(arrayClass[i], error_paragraph);
                        return;
                    }
                    break;
                case "emailCode":
                    const emailRegexp = /^[a-z\d-]+\w?\.?([\w\d-]+)?@[\w\d-]{2,}\.[a-z]{2,6}(\.[a-z]{2,6})?$/gi;
                    if(!emailRegexp.test(inputElement[i])) {
                        infoError(arrayClass[i], error_paragraph);
                        return;
                    }
                    break;
            }
        }
		validationSuccess(error_paragraph);
    }

    const issetClassElement = (event) => {
		event.preventDefault();
		
        const className = [
            "textCode",
            "postalCode",
            "emailCode",
            "urlCode"
        ];

		const arrayElement = [];
        const arrayClass = [];
        for(const issetClassName of className) {
            if(document.querySelector(`.js-${issetClassName}`)) {
                const inputElement = document.querySelector(`.js-${issetClassName}`).value.trim();
                arrayElement.push(inputElement);
                arrayClass.push(issetClassName);
            }
        }
        checkValue(arrayElement, arrayClass);
    }

    const init = () => {
        const formSendElement = document.querySelector(".js-submitForm");
        formSendElement.addEventListener("click", issetClassElement);
    }

    init();
}