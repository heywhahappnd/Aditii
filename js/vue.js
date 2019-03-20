new Vue({
	el: "#vue-app",
	data: {
		total: 300,
		options: ["Home", "Sale", "Handbags", "Wallets", "Accessories", "Mens Store", "Shoes", "Vintage", "Services", "Contact us"],
		title: "FEATURED PRODUCTS",
		count: 10,
		products: [
			{title: "Branded Shoes", price: 300, count: 10, src: "img/ftr-item-1.png"},
			{title: "Branded Tees", price: 300, count: 10, src: "img/ftr-item-2.png"},
			{title: "Branded T-shirts", price: 300, count: 10, src: "img/ftr-item-3.png"},
			{title: "Branded Wallets", price: 300, count: 10, src: "img/ftr-item-4.png"},
			{title: "EMS Women Bag", price: 300, count: 10, src: "img/ftr-item-5.png"},
			{title: "Branded Tees", price: 300, count: 10, src: "img/ftr-item-2.png"}
		]
	},
	methods: {
		buy: function(){
			this.total += 300;
		}
	}	
});

