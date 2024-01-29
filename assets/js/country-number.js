document.addEventListener("DOMContentLoaded", function () {
	const countryPhone = document.querySelector(".country-phone");
	const countryList = document.querySelector(".country__list");
	const divClear = document.querySelector(".country__list-clear");
	const country = document.getElementById("country");

	const load = async function () {



		// Create a document fragment to hold the elements
		const fragment = document.createDocumentFragment();

		for (let [name, value] of Object.entries(data)) {
			const div = document.createElement("div");
			div.classList.add("country__list-item");
			div.classList.add("country__list-item-hov");
			div.dataset.iso = name;
			div.innerHTML = `
            <div>
                <span class="flag-icon flag-icon-${name} flag-icon-squared">
                </span>
                <div class="country__descr">
                    <p>${value.name}</p>
                    ${value.descr ? `<p><span style="display: block; width: 100% !important;">${value.descr}</span></p>` : ""}
                </div>
            </div>
            <div class="country-code">${value.code}</div>
        `;

			// Append the element to the fragment
			fragment.appendChild(div);
		}

		// Append the fragment to the container
		divClear.appendChild(fragment);


	}

	load();

	countryPhone.addEventListener("click", function (e) {
		e.stopPropagation();
		countryList.classList.toggle("scale");
		document.querySelector("input").focus();



		if (!countryList.classList.contains("scale")) {
			divClear.innerHTML = "";
		}

	});

	document.addEventListener("click", function (e) {
		if (!countryList.contains(e.target) && e.target !== countryPhone) {
			countryList.classList.remove("scale");
			divClear.innerHTML = "";
		}
	});

	country.addEventListener("input", function () {
		document.querySelectorAll(".country__list-item-hov").forEach((country) => {
			const countryName = country.querySelector(".country__descr p").textContent.toLowerCase();
			const spanContent = country.querySelector(".country__descr p span")?.textContent.toLowerCase();

			const isVisible = countryName.includes(this.value.toLowerCase()) || spanContent?.includes(this.value.toLowerCase());
			country.style.display = isVisible ? "flex" : "none";
		});
		});

	document.querySelectorAll(".country__list-clear .country__list-item").forEach(item => {
		item.addEventListener("click", function (e) {



		})
	})
});
