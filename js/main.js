"use strict";

const form = document.getElementById("recall_form_wrapper");
const formError = document.getElementById("recall_form_error");
const formButton = document.getElementById("recall_form_button");

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    formError.textContent = "Отправка...";
    formButton.disabled = true;
    const data = {
        first_name: document.getElementById("recall_user_first_name").value,
        email: document.getElementById("recall_user_email").value,
        message: document.getElementById("recall_user_message").value,
        id: "1855011454"
    }

    if(!data.first_name || !data.email || !data.message) {
        formError.textContent = "Заполните все поля!";
        formButton.disabled = false;
        return;
    }

    try {
        const response = await fetch("https://first-site.bot4.chat/index.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            throw new Error("Ошибка отправки!");
        }

        form.reset();
        formError.textContent = "Заявка успешно отправлена!";
    } catch (error) {
        formError.textContent = "Ошибка! Попробуйте еще раз!"
    } finally {
        formButton.disabled = false;
        setTimeout(() => {
            formError.textContent = "";
        }, 5000);
    }
    

    
});

