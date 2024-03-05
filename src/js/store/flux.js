const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			vehiculos: []
		},
		actions: {
			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getplanetas: () => {
				fetch("https://www.swapi.tech/api/planets")
				.then(res => res.json())
				.then(data => setStore({planets: data.results}))
				.catch(err => console.error(err))
			},
			getvehiculos: () => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(res => res.json())
				.then(data => setStore({vehiculos: data.results}))
				.catch(err => console.error(err))
			},
			loadSomeData: () => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("https://www.swapi.tech/api/planets/", requestOptions)
					.then((response) => response.json())
					.then((result) => {
						console.log(result);
						setStore({ planets: result.results });
					})
					.catch((error) => console.error(error));
			},
			changeColor: (index, color) => {
				// Get the store
				const store = getStore();

				// Loop through the entire demo array to look for the respective index
				// and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				// Reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;