//storing dummy response as API is giving CORS error
const dummyApiResponse = {
    "code": 200,
    "num_pages": 4,
    "products": [
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 18152,
            "unit": 0,
            "product_name": "Aashirvaad Shudh Chakki Whole Wheat Atta",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 361,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22175,
                    "quantity": 20,
                    "name": "10kg",
                    "variant_id": 22209,
                    "mrp": 375
                },
                {
                    "weight": null,
                    "selling_price": 361,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22657,
                    "quantity": 20,
                    "name": "10kg",
                    "variant_id": 22209,
                    "mrp": 375
                }
            ],
            "search_keyword": "Aashirvaad Shudh Chakki Whole Wheat Atta",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18152_14_images6-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 2,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "1",
            "product_id": 20946,
            "unit": 1,
            "product_name": "Arhar Daal",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 102,
                    "barcode": "3522601000006",
                    "added_quantity": 0,
                    "id": 25181,
                    "quantity": 20,
                    "name": "KG",
                    "variant_id": 25171,
                    "mrp": 102
                }
            ],
            "search_keyword": "",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/20946_cropped2732234924921581529-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 18182,
            "unit": 0,
            "product_name": "Ariel Complete Detergent Powder",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 580,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22205,
                    "quantity": 20,
                    "name": "4kg",
                    "variant_id": 22239,
                    "mrp": 1160
                }
            ],
            "search_keyword": "Ariel Complete Detergent Powder",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18182_14_images35-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 18160,
            "unit": 0,
            "product_name": "Bajaj Almond Drops Hair Oil",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 280,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22183,
                    "quantity": 20,
                    "name": "500ml",
                    "variant_id": 22217,
                    "mrp": 280
                }
            ],
            "search_keyword": "Bajaj Almond Drops Hair Oil,",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18160_images12-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": false,
            "barcode": "",
            "allow_below_zero": false,
            "food_item": "2",
            "product_id": 20947,
            "unit": 0,
            "product_name": "Cake Chocolate",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 20,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 25183,
                    "quantity": 20,
                    "name": "20 Gm",
                    "variant_id": 25173,
                    "mrp": 30
                },
                {
                    "weight": 0,
                    "selling_price": 30,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 25184,
                    "quantity": 20,
                    "name": "40 Gm",
                    "variant_id": 25174,
                    "mrp": 50
                }
            ],
            "search_keyword": "Bri,",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/20947_cropped2797471320492739066-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "1",
            "product_id": 18145,
            "unit": 0,
            "product_name": "Chakki Atta",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 310,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22168,
                    "quantity": 20,
                    "name": "10kg",
                    "variant_id": 22202,
                    "mrp": 330
                },
                {
                    "weight": null,
                    "selling_price": 310,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22658,
                    "quantity": 20,
                    "name": "10kg",
                    "variant_id": 22202,
                    "mrp": 330
                },
                {
                    "weight": 0,
                    "selling_price": 150,
                    "barcode": "2221862100000",
                    "added_quantity": 0,
                    "id": 25180,
                    "quantity": 20,
                    "name": "5 Kg",
                    "variant_id": 25170,
                    "mrp": 160
                }
            ],
            "search_keyword": "Chakki Atta,",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18145_14_images2-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 18166,
            "unit": 0,
            "product_name": "Clinic Plus Strong & Long Health Shampoo",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 288,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22189,
                    "quantity": 20,
                    "name": "650ml",
                    "variant_id": 22223,
                    "mrp": 288
                }
            ],
            "search_keyword": "Clinic Plus Strong & Long Health Shampoo,",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18166_51nDqDUzzML._SX425_-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 18170,
            "unit": 0,
            "product_name": "Colgate Strong Teeth Anticavity with Amino Shakti Toothpaste - (With Free Toothbrush)",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 145,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22193,
                    "quantity": 20,
                    "name": "200g+100g+1unit",
                    "variant_id": 22227,
                    "mrp": 145
                }
            ],
            "search_keyword": "Colgate Strong Teeth Anticavity with Amino Shakti Toothpaste - (With Free Toothbrush),",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18170_images23-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 18162,
            "unit": 0,
            "product_name": "Dettol Original Handwash (Jar)",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 149,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22185,
                    "quantity": 20,
                    "name": "900ml",
                    "variant_id": 22219,
                    "mrp": 149
                }
            ],
            "search_keyword": "Dettol Original Handwash (Jar),",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18162_images15-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 18163,
            "unit": 0,
            "product_name": "Dettol Original Handwash (Pump)",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 79,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22186,
                    "quantity": 20,
                    "name": "200ml",
                    "variant_id": 22220,
                    "mrp": 79
                }
            ],
            "search_keyword": "Dettol Original Handwash (Pump),",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18163_images16-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 18164,
            "unit": 0,
            "product_name": "Dettol Skin Care Handwash (Refill)",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 109,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22187,
                    "quantity": 20,
                    "name": "750ml",
                    "variant_id": 22221,
                    "mrp": 109
                }
            ],
            "search_keyword": "Dettol Skin Care Handwash (Refill),",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18164_images17-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 18165,
            "unit": 0,
            "product_name": "Dove Cream Beauty Bathing Bar Soap - Pack of 3",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 145,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22188,
                    "quantity": 20,
                    "name": "3x100g",
                    "variant_id": 22222,
                    "mrp": 155
                }
            ],
            "search_keyword": "Dove Cream Beauty Bathing Bar Soap - Pack of 3,",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18165_images18-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 20950,
            "unit": 0,
            "product_name": "Eclairs",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 1,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 25187,
                    "quantity": 20,
                    "name": "Regular",
                    "variant_id": 25177,
                    "mrp": 1
                }
            ],
            "search_keyword": "",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/20950_cropped8731390168108639296-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 19936,
            "unit": 0,
            "product_name": "Excel Upload",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 0,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 23987,
                    "quantity": 20,
                    "name": "Regular",
                    "variant_id": 23977,
                    "mrp": 0
                }
            ],
            "search_keyword": "",
            "image_url": ""
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 19938,
            "unit": 0,
            "product_name": "Excel Upload",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 0,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 23989,
                    "quantity": 20,
                    "name": "Regular",
                    "variant_id": 23979,
                    "mrp": 0
                }
            ],
            "search_keyword": "",
            "image_url": ""
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 18173,
            "unit": 0,
            "product_name": "Ezee Liquid Detergent",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 167,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22196,
                    "quantity": 20,
                    "name": "1kg",
                    "variant_id": 22230,
                    "mrp": 175
                }
            ],
            "search_keyword": "Ezee Liquid Detergent",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18173_14_images26-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 18147,
            "unit": 0,
            "product_name": "Family Farm Arhar Dal/Toor Dal",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 115,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22170,
                    "quantity": 20,
                    "name": "1kg",
                    "variant_id": 22204,
                    "mrp": 120
                },
                {
                    "weight": null,
                    "selling_price": 115,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22659,
                    "quantity": 20,
                    "name": "1kg",
                    "variant_id": 22204,
                    "mrp": 120
                }
            ],
            "search_keyword": "Family Farm Arhar Dal/Toor Dal",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18147_14_images3-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 18146,
            "unit": 0,
            "product_name": "Family Farm Broken Mogra Basmati Rice",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 328,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22169,
                    "quantity": 20,
                    "name": "10kg",
                    "variant_id": 22203,
                    "mrp": 650
                },
                {
                    "weight": null,
                    "selling_price": 328,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22660,
                    "quantity": 20,
                    "name": "10kg",
                    "variant_id": 22203,
                    "mrp": 650
                }
            ],
            "search_keyword": "Family Farm Broken Mogra Basmati Rice",
            "image_url": ""
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 18148,
            "unit": 0,
            "product_name": "Family Farm Chana Dal",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 86,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22171,
                    "quantity": 20,
                    "name": "1kg",
                    "variant_id": 22205,
                    "mrp": 120
                },
                {
                    "weight": null,
                    "selling_price": 86,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22661,
                    "quantity": 20,
                    "name": "1kg",
                    "variant_id": 22205,
                    "mrp": 120
                }
            ],
            "search_keyword": "Family Farm Chana Dal",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18148_14_images4-thumbnail-120x120-70.jpg"
        },
        {
            "product_type": 1,
            "track_inventory": true,
            "barcode": "",
            "allow_below_zero": true,
            "food_item": "0",
            "product_id": 18144,
            "unit": 0,
            "product_name": "Family Farm Moong Dal (Dhuli)",
            "price_stock": [
                {
                    "weight": 0,
                    "selling_price": 140,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22167,
                    "quantity": 20,
                    "name": "1kg",
                    "variant_id": 22201,
                    "mrp": 140
                },
                {
                    "weight": null,
                    "selling_price": 140,
                    "barcode": "",
                    "added_quantity": 0,
                    "id": 22662,
                    "quantity": 20,
                    "name": "1kg",
                    "variant_id": 22201,
                    "mrp": 140
                }
            ],
            "search_keyword": "Family Farm Moong Dal (Dhuli),",
            "image_url": "https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18144_14_images1-thumbnail-120x120-70.jpg"
        }
    ]
};

export default dummyApiResponse;