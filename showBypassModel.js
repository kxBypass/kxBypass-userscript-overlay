function showBypassModal(link) {
    const modalHTML = `
        <div id="kxBypass-modal">
            <div id="kxBypass-modal-content">
                <img src="https://i.pinimg.com/736x/aa/2a/e5/aa2ae567da2c40ac6834a44abbb9e9ff.jpg" id="kxBypass-logo">
                <h1>kxBypass Development</h1>
                <p>Bypass Successful! Here is your link:</p>
                <input type="text" id="kxBypass-link" value="${link}" readonly>
                <button id="kxBypass-redirect">Redirect</button>
                <button id="kxBypass-close">✕</button>
            </div>
        </div>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

            #kxBypass-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                font-family: 'Poppins', sans-serif;
            }

            #kxBypass-modal-content {
                background: #fff;
                padding: 20px;
                border-radius: 12px;
                text-align: center;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                max-width: 400px;
                width: 100%;
                position: relative;
            }

            #kxBypass-logo {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-bottom: 10px;
            }

            h1 {
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 10px;
                color: #333;
            }

            p {
                font-size: 14px;
                color: #666;
                margin-bottom: 15px;
            }

            #kxBypass-link {
                width: 100%;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 6px;
                text-align: center;
                font-size: 14px;
                color: #333;
                margin-bottom: 15px;
            }

            button {
                width: 100%;
                padding: 10px;
                margin-top: 5px;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-weight: 600;
                transition: 0.3s ease;
            }

            #kxBypass-redirect {
                background: #3498db;
                color: #fff;
            }

            #kxBypass-redirect:hover {
                background: #2980b9;
            }

            #kxBypass-close {
                background: #e74c3c;
                color: #fff;
                position: absolute;
                top: 10px;
                right: 10px;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                padding: 0;
                line-height: 30px;
                text-align: center;
            }

            #kxBypass-close:hover {
                background: #c0392b;
            }
        </style>
    `;

    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);

    document.getElementById("kxBypass-redirect").addEventListener("click", () => {
        window.location.href = link;
    });

    document.getElementById("kxBypass-close").addEventListener("click", () => {
        document.getElementById("kxBypass-modal").remove();
    });
}
