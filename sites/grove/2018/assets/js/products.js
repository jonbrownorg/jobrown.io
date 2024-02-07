$( document ).ready(function() {

$('.nodef').click(function(e) {
    e.preventDefault();
});


$('#rootwizard').bootstrapWizard({onTabShow: function(tab, navigation, index) {
		var $total = navigation.find('li').length;
		var $current = index+1;
		var $percent = ($current/$total) * 100;
		$('#rootwizard .progress-bar').css({width:$percent+'%'});
	}});

var a = {
	Products: [
	{
		"applePproduct": "Macbook Gray 1.2GHz dual-core 7th-generation Intel Core m3 processor Turbo Boost up to 3.0GHz 8GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Gray 1.2GHz dual-core 7th-generation Intel Core m3 processor Turbo Boost up to 3.0GHz 16GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Gray 1.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.2GHz 8GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Gray 1.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.2GHz 16GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Gray 1.4GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Gray 1.4GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Gold 1.2GHz dual-core 7th-generation Intel Core m3 processor Turbo Boost up to 3.0GHz 8GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Gold 1.2GHz dual-core 7th-generation Intel Core m3 processor Turbo Boost up to 3.0GHz 16GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Gold 1.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.2GHz 8GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Gold 1.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.2GHz 16GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Gold 1.4GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Gold 1.4GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Space Gray 1.2GHz dual-core 7th-generation Intel Core m3 processor Turbo Boost up to 3.0GHz 8GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Space Gray 1.2GHz dual-core 7th-generation Intel Core m3 processor Turbo Boost up to 3.0GHz 16GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Space Gray 1.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.2GHz 8GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Space Gray 1.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.2GHz 16GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Space Gray 1.4GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Space Gray 1.4GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Rose Gold 1.2GHz dual-core 7th-generation Intel Core m3 processor Turbo Boost up to 3.0GHz 8GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Rose Gold 1.2GHz dual-core 7th-generation Intel Core m3 processor Turbo Boost up to 3.0GHz 16GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Rose Gold 1.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.2GHz 8GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Rose Gold 1.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.2GHz 16GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Rose Gold 1.4GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory"
	},
	{
		"applePproduct": "Macbook Air Space Gray 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 256GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Space Gray 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 512GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Space Gray 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 1.5TB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Space Gray 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 256GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Space Gray 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 512GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Space Gray 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 1.5TB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Space Gray 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 256GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Space Gray 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 512GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Space Gray 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 1.5TB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Space Gray 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 256GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Space Gray 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 512GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Space Gray 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 1.5TB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Gold 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 256GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Gold 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 512GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Gold 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 1.5TB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Gold 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 256GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Gold 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 512GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Gold 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 1.5TB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Gold 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 256GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Gold 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 512GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Gold 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 1.5TB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Gold 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 256GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Gold 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 512GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Gold 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 1.5TB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Silver 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 256GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Silver 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 512GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Silver 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 1.5TB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Silver 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 256GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Silver 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 512GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Silver 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 1.5TB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Silver 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 256GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Silver 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 512GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Silver 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 1.5TB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Silver 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 256GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Silver 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 512GB SSD storage"
	},
	{
		"applePproduct": "Macbook Air Silver 1.6GHz dual‑core 8th‑generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2133MHz LPDDR3 memory 1.5TB SSD storage"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 128GB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 128GB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 128GB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 128GB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 256GB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 256GB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 256GB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 256GB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 512GB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 512GB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 512GB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 512GB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 1TB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 1TB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 1TB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 1866MHz LPDDR3 memory 1TB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 128GB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 128GB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 128GB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 128GB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 256GB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 256GB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 256GB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 256GB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 512GB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 512GB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 512GB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 512GB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 1TB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 1TB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 1TB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 1866MHz LPDDR3 memory 1TB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 128GB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 128GB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 128GB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 128GB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 256GB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 256GB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 256GB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 256GB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 512GB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 512GB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 512GB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 512GB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 1TB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 1TB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 1TB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 8GB 1866MHz LPDDR3 memory 1TB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 128GB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 128GB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 128GB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 128GB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 256GB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 256GB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 256GB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 256GB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 512GB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 512GB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 512GB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 512GB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 1TB SSD storage Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 1TB SSD storage Gray 15-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 1TB SSD storage Space Gray 13-inch"
	},
	{
		"applePproduct": "Macbook Pro 2.5GHz dual-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.0GHz 16GB 1866MHz LPDDR3 memory 1TB SSD storage Space Gray 15-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 21-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 27-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2400MHz DDR4 1TB Fusion Drive 21-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2400MHz DDR4 1TB Fusion Drive 27-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2400MHz DDR4 256GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2400MHz DDR4 256GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2400MHz DDR4 512GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2400MHz DDR4 512GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 21-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 27-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2400MHz DDR4 1TB Fusion Drive 21-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2400MHz DDR4 1TB Fusion Drive 27-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2400MHz DDR4 256GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2400MHz DDR4 256GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2400MHz DDR4 512GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 16GB 2400MHz DDR4 512GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 8GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 21-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 8GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 27-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 8GB 2400MHz DDR4 1TB Fusion Drive 21-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 8GB 2400MHz DDR4 1TB Fusion Drive 27-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 8GB 2400MHz DDR4 256GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 8GB 2400MHz DDR4 256GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 8GB 2400MHz DDR4 512GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 8GB 2400MHz DDR4 512GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 16GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 21-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 16GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 27-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 16GB 2400MHz DDR4 1TB Fusion Drive 21-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 16GB 2400MHz DDR4 1TB Fusion Drive 27-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 16GB 2400MHz DDR4 256GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 16GB 2400MHz DDR4 256GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 16GB 2400MHz DDR4 512GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 3.0GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.5GH 16GB 2400MHz DDR4 512GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 8GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 21-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 8GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 27-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 8GB 2400MHz DDR4 1TB Fusion Drive 21-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 8GB 2400MHz DDR4 1TB Fusion Drive 27-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 8GB 2400MHz DDR4 256GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 8GB 2400MHz DDR4 256GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 8GB 2400MHz DDR4 512GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 8GB 2400MHz DDR4 512GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 16GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 21-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 16GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 27-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 16GB 2400MHz DDR4 1TB Fusion Drive 21-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 16GB 2400MHz DDR4 1TB Fusion Drive 27-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 16GB 2400MHz DDR4 256GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 16GB 2400MHz DDR4 256GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 16GB 2400MHz DDR4 512GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 16GB 2400MHz DDR4 512GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 8GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 21-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 8GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 27-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 8GB 2400MHz DDR4 1TB Fusion Drive 21-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 8GB 2400MHz DDR4 1TB Fusion Drive 27-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 8GB 2400MHz DDR4 256GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 8GB 2400MHz DDR4 256GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 8GB 2400MHz DDR4 512GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 8GB 2400MHz DDR4 512GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 16GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 21-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 16GB 2400MHz DDR4 1TB Serial ATA Drive @ 5400 rpm 27-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 16GB 2400MHz DDR4 1TB Fusion Drive 21-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 16GB 2400MHz DDR4 1TB Fusion Drive 27-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 16GB 2400MHz DDR4 256GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 16GB 2400MHz DDR4 256GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 16GB 2400MHz DDR4 512GB SSD 21-inch"
	},
	{
		"applePproduct": "iMac 3.6GHz quad-core 7th-generation Intel Core i7 processor Turbo Boost up to 4.2GHz 16GB 2400MHz DDR4 512GB SSD 27-inch"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.2GHz 8-core Intel Xeon W processor Turbo Boost up to 4.2GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 3.0GHz 10-core Intel Xeon W processor Turbo Boost up to 4.5GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.5GHz 14-core Intel Xeon W processor Turbo Boost up to 4.3GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 32GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 64GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 56 with 8GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 1TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 2TB SSD"
	},
	{
		"applePproduct": "iMac Pro 2.3GHz 18-core Intel Xeon W processor Turbo Boost up to 4.3GHz 128GB 2666MHz DDR4 ECC memory Radeon Pro Vega 64 with 16GB of HBM2 memory 4TB SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 6-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.5GHz 6-core with 12MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 3.0GHz 8-core with 25MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 16GB (4x4GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 32GB (4x8GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D500 GPUs with 3GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 256GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 512GB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Pro 8-Core and Dual GPU 2.7GHz 12-core with 30MB of L3 cache 64GB (4x16GB) of 1866MHz DDR3 ECC Dual AMD FirePro D700 GPUs with 6GB of GDDR5 VRAM each 1TB PCIe-based SSD"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 8GB 2666MHz DDR4 128GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 8GB 2666MHz DDR4 128GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 8GB 2666MHz DDR4 256GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 8GB 2666MHz DDR4 256GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 8GB 2666MHz DDR4 512GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 8GB 2666MHz DDR4 512GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 8GB 2666MHz DDR4 1TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 8GB 2666MHz DDR4 1TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 8GB 2666MHz DDR4 2TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 8GB 2666MHz DDR4 2TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 16GB 2666MHz DDR4 128GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 16GB 2666MHz DDR4 128GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 16GB 2666MHz DDR4 256GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 16GB 2666MHz DDR4 256GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 16GB 2666MHz DDR4 512GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 16GB 2666MHz DDR4 512GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 16GB 2666MHz DDR4 1TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 16GB 2666MHz DDR4 1TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 16GB 2666MHz DDR4 2TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 16GB 2666MHz DDR4 2TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 32GB 2666MHz DDR4 128GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 32GB 2666MHz DDR4 128GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 32GB 2666MHz DDR4 256GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 32GB 2666MHz DDR4 256GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 32GB 2666MHz DDR4 512GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 32GB 2666MHz DDR4 512GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 32GB 2666MHz DDR4 1TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 32GB 2666MHz DDR4 1TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 32GB 2666MHz DDR4 2TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 32GB 2666MHz DDR4 2TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 64GB 2666MHz DDR4 128GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 64GB 2666MHz DDR4 128GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 64GB 2666MHz DDR4 256GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 64GB 2666MHz DDR4 256GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 64GB 2666MHz DDR4 512GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 64GB 2666MHz DDR4 512GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 64GB 2666MHz DDR4 1TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 64GB 2666MHz DDR4 1TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 64GB 2666MHz DDR4 2TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.0GHz 6‑core 8th‑generation Intel Core i5 (Turbo Boost up to 4.1GHz) 64GB 2666MHz DDR4 2TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 8GB 2666MHz DDR4 128GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 8GB 2666MHz DDR4 128GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 8GB 2666MHz DDR4 256GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 8GB 2666MHz DDR4 256GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 8GB 2666MHz DDR4 512GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 8GB 2666MHz DDR4 512GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 8GB 2666MHz DDR4 1TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 8GB 2666MHz DDR4 1TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 8GB 2666MHz DDR4 2TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 8GB 2666MHz DDR4 2TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 16GB 2666MHz DDR4 128GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 16GB 2666MHz DDR4 128GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 16GB 2666MHz DDR4 256GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 16GB 2666MHz DDR4 256GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 16GB 2666MHz DDR4 512GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 16GB 2666MHz DDR4 512GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 16GB 2666MHz DDR4 1TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 16GB 2666MHz DDR4 1TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 16GB 2666MHz DDR4 2TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 16GB 2666MHz DDR4 2TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 32GB 2666MHz DDR4 128GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 32GB 2666MHz DDR4 128GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 32GB 2666MHz DDR4 256GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 32GB 2666MHz DDR4 256GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 32GB 2666MHz DDR4 512GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 32GB 2666MHz DDR4 512GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 32GB 2666MHz DDR4 1TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 32GB 2666MHz DDR4 1TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 32GB 2666MHz DDR4 2TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 32GB 2666MHz DDR4 2TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 64GB 2666MHz DDR4 128GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 64GB 2666MHz DDR4 128GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 64GB 2666MHz DDR4 256GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 64GB 2666MHz DDR4 256GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 64GB 2666MHz DDR4 512GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 64GB 2666MHz DDR4 512GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 64GB 2666MHz DDR4 1TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 64GB 2666MHz DDR4 1TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 64GB 2666MHz DDR4 2TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.2GHz 6‑core 8th‑generation Intel Core i7 (Turbo Boost up to 4.6GHz) 64GB 2666MHz DDR4 2TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 8GB 2666MHz DDR4 128GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 8GB 2666MHz DDR4 128GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 8GB 2666MHz DDR4 256GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 8GB 2666MHz DDR4 256GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 8GB 2666MHz DDR4 512GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 8GB 2666MHz DDR4 512GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 8GB 2666MHz DDR4 1TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 8GB 2666MHz DDR4 1TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 8GB 2666MHz DDR4 2TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 8GB 2666MHz DDR4 2TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 16GB 2666MHz DDR4 128GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 16GB 2666MHz DDR4 128GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 16GB 2666MHz DDR4 256GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 16GB 2666MHz DDR4 256GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 16GB 2666MHz DDR4 512GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 16GB 2666MHz DDR4 512GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 16GB 2666MHz DDR4 1TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 16GB 2666MHz DDR4 1TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 16GB 2666MHz DDR4 2TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 16GB 2666MHz DDR4 2TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 32GB 2666MHz DDR4 128GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 32GB 2666MHz DDR4 128GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 32GB 2666MHz DDR4 256GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 32GB 2666MHz DDR4 256GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 32GB 2666MHz DDR4 512GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 32GB 2666MHz DDR4 512GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 32GB 2666MHz DDR4 1TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 32GB 2666MHz DDR4 1TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 32GB 2666MHz DDR4 2TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 32GB 2666MHz DDR4 2TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 64GB 2666MHz DDR4 128GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 64GB 2666MHz DDR4 128GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 64GB 2666MHz DDR4 256GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 64GB 2666MHz DDR4 256GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 64GB 2666MHz DDR4 512GB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 64GB 2666MHz DDR4 512GB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 64GB 2666MHz DDR4 1TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 64GB 2666MHz DDR4 1TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 64GB 2666MHz DDR4 2TB SSD storage Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet using RJ-45 connector)"
	},
	{
		"applePproduct": "Mac Mini Space Gray 3.6GHz quad‑core 8th‑generation Intel Core i3 64GB 2666MHz DDR4 2TB SSD storage 10 Gigabit Ethernet (Nbase-T Ethernet with support for 1Gb"
	},
	{
		"applePproduct": "iPad Pro 11-inch iPad Pro Silver 64GB"
	},
	{
		"applePproduct": "iPad Pro 11-inch iPad Pro Silver 256GB"
	},
	{
		"applePproduct": "iPad Pro 11-inch iPad Pro Silver 512GB"
	},
	{
		"applePproduct": "iPad Pro 11-inch iPad Pro Space Gray 64GB"
	},
	{
		"applePproduct": "iPad Pro 11-inch iPad Pro Space Gray 256GB"
	},
	{
		"applePproduct": "iPad Pro 11-inch iPad Pro Space Gray 512GB"
	},
	{
		"applePproduct": "iPad Pro 11-inch iPad Pro Space Gray 1TB"
	},
	{
		"applePproduct": "iPad Pro 12.9-inch iPad Pro Silver 64GB"
	},
	{
		"applePproduct": "iPad Pro 12.9-inch iPad Pro Silver 256GB"
	},
	{
		"applePproduct": "iPad Pro 12.9-inch iPad Pro Silver 512GB"
	},
	{
		"applePproduct": "iPad Pro 12.9-inch iPad Pro Space Gray 64GB"
	},
	{
		"applePproduct": "iPad Pro 12.9-inch iPad Pro Space Gray 256GB"
	},
	{
		"applePproduct": "iPad Pro 12.9-inch iPad Pro Space Gray 512GB"
	},
	{
		"applePproduct": "iPad Pro 12.9-inch iPad Pro Space Gray 1TB"
	},
	{
		"applePproduct": "iPad 9.7-Inch Silver 32GB"
	},
	{
		"applePproduct": "iPad 9.7-Inch Silver 128GB"
	},
	{
		"applePproduct": "iPad 9.7-Inch Space Gray 32GB"
	},
	{
		"applePproduct": "iPad 9.7-Inch Space Gray 128GB"
	},
	{
		"applePproduct": "iPad 9.7-Inch Gold 32GB"
	},
	{
		"applePproduct": "iPad 9.7-Inch Gold 128GB"
	},
	{
		"applePproduct": "iPad Mini Silver 128GB"
	},
	{
		"applePproduct": "iPad Mini Space Gray 128GB"
	},
	{
		"applePproduct": "iPad Mini Gold 128GB"
	},
	{
		"applePproduct": "iPhone 7 Black 32GB"
	},
	{
		"applePproduct": "iPhone 7 Black 128GB"
	},
	{
		"applePproduct": "iPhone 7 Silver 32GB"
	},
	{
		"applePproduct": "iPhone 7 Silver 128GB"
	},
	{
		"applePproduct": "iPhone 7 Gold 32GB"
	},
	{
		"applePproduct": "iPhone 7 Gold 128GB"
	},
	{
		"applePproduct": "iPhone 7 Rose Gold 32GB"
	},
	{
		"applePproduct": "iPhone 7 Rose Gold 128GB"
	},
	{
		"applePproduct": "iPhone 7 Plus Black 32GB"
	},
	{
		"applePproduct": "iPhone 7 Plus Black 128GB"
	},
	{
		"applePproduct": "iPhone 7 Plus Silver 32GB"
	},
	{
		"applePproduct": "iPhone 7 Plus Silver 128GB"
	},
	{
		"applePproduct": "iPhone 7 Plus Gold 32GB"
	},
	{
		"applePproduct": "iPhone 7 Plus Gold 128GB"
	},
	{
		"applePproduct": "iPhone 7 Plus Rose Gold 32GB"
	},
	{
		"applePproduct": "iPhone 7 Plus Rose Gold 128GB"
	},
	{
		"applePproduct": "iPhone 8 Silver 64Gb"
	},
	{
		"applePproduct": "iPhone 8 Silver 256GB"
	},
	{
		"applePproduct": "iPhone 8 Space Gray 64Gb"
	},
	{
		"applePproduct": "iPhone 8 Space Gray 256GB"
	},
	{
		"applePproduct": "iPhone 8 Gold 64Gb"
	},
	{
		"applePproduct": "iPhone 8 Gold 256GB"
	},
	{
		"applePproduct": "iPhone 8 Plus Silver 64Gb"
	},
	{
		"applePproduct": "iPhone 8 Plus Silver 256GB"
	},
	{
		"applePproduct": "iPhone 8 Plus Space Gray 64Gb"
	},
	{
		"applePproduct": "iPhone 8 Plus Space Gray 256GB"
	},
	{
		"applePproduct": "iPhone 8 Plus Gold 64Gb"
	},
	{
		"applePproduct": "iPhone 8 Plus Gold 256GB"
	},
	{
		"applePproduct": "iPhone Xs Silver"
	},
	{
		"applePproduct": "iPhone Xs Space Gray"
	},
	{
		"applePproduct": "iPhone Xs Gold"
	},
	{
		"applePproduct": "iPhone Xs Max Silver"
	},
	{
		"applePproduct": "iPhone Xs Max Space Gray"
	},
	{
		"applePproduct": "iPhone Xs Max Gold"
	},
	{
		"applePproduct": "iPhone Xr White 64GB"
	},
	{
		"applePproduct": "iPhone Xr White 128GB"
	},
	{
		"applePproduct": "iPhone Xr White 256GB"
	},
	{
		"applePproduct": "iPhone Xr Black 64GB"
	},
	{
		"applePproduct": "iPhone Xr Black 128GB"
	},
	{
		"applePproduct": "iPhone Xr Black 256GB"
	},
	{
		"applePproduct": "iPhone Xr Blue 64GB"
	},
	{
		"applePproduct": "iPhone Xr Blue 128GB"
	},
	{
		"applePproduct": "iPhone Xr Blue 256GB"
	},
	{
		"applePproduct": "iPhone Xr Yellow 64GB"
	},
	{
		"applePproduct": "iPhone Xr Yellow 128GB"
	},
	{
		"applePproduct": "iPhone Xr Yellow 256GB"
	},
	{
		"applePproduct": "iPhone Xr Coral 64GB"
	},
	{
		"applePproduct": "iPhone Xr Coral 128GB"
	},
	{
		"applePproduct": "iPhone Xr Coral 256GB"
	},
	{
		"applePproduct": "iPhone Xr Red 64GB"
	},
	{
		"applePproduct": "iPhone Xr Red 128GB"
	},
	{
		"applePproduct": "iPhone Xr Red 256GB"
	},
	{
		"applePproduct": "Apple TV 3GB"
	},
	{
		"applePproduct": "Apple TV 64GB"
	},
	{
		"applePproduct": "Apple TV 4K 3GB"
	},
	{
		"applePproduct": "Apple TV 4K 64GB"
	}
]
};
$.each(a.Products, function (key, value) {
	$(".sp_name").append($('<option></option>').html(value.applePproduct));
});


$(document).on("click", ".remove_bank_row", function() {
  var $table = $(this).closest('table');
  $(this).closest('tr').remove();
  $table.trigger("recalc");   
  getSelects();   
});


$('#add_bank_info').click(function() {
  var ele = $('.bank_table tbody tr:last');
  var ele_clone = ele.clone();

  ele_clone.find('select').prop("disabled", false).val('');
  ele_clone.find('td div.dummy').removeClass('has-error has-success');
  ele_clone.find('td div.input-icon i').removeClass('fa-check fa-warning');
  ele_clone.find('td:last').show();
  ele.after(ele_clone);
  
  $(".bank_table").trigger("recalc");
  getSelects();
  
});

$(document).on("recalc", ".bank_table", function () {
  getSelects();
});

$(".bank_table").trigger("recalc");

$(document).on('keyup click', '.qty', function() { 
  getSelects();
});

$(document).on('change', '.sp_name', function() { 
  getSelects();
});







function getSelects() {


var newLine = "\r\n";

var html = 'Hello,' + newLine + ''+ newLine +'I am interested in purchasing the following items. Please contact me as soon as possible to finalize the order.' + newLine + newLine;

		$(".bank_table tbody tr").each(function(i, v) {
             html += "" + $(this).find(':selected').text() +  "    -    "
                        + "Qty: " + $(this).find('input[id$=qty]').val() + "";
             html += newLine;
        });

html += newLine;

document.getElementById("message").value = html;

}


});