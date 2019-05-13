const accountMocks = [
    {
    	"_id": 1,
	    "fullname": "Alan Hunter",
	    "lastname": "Brito Delgado",
	    "email": "alanbrito@email.com",
	    "password": "12345678",
	    "country": "Chile",
	    "badge": "CLP"
	    "birthdate": "09-12-1989",
	    "wallet": {
	    	"_id": 1,
	        "availableBalance": 1000000,
	        "totalBalance": 1000000,
	        "amountSaved": 1000000,
	        "scheduledIncomes": [
	            {
	            	"_id": 1,
	                "amount": 100000,
	                "period": 30 // days
	                "lastUpdate": "12-05-2019 22:15:02",
	                "createdAt": "12-05-2019 22:15:02"
	            }
	        ],
	        "scheduledSavings": [
	            { // se descuenta del saldo total
	            	"_id": 1,
	                "startingAmount": 100000,
	                "finalAmount": 100000,
	                "interestRate": 0, // 0,02 etc
	                "period": 30 // days
	                "lastUpdate": "12-05-2019 22:15:02" 
	                "createdAt": "12-05-2019 22:15:02"
	            }
	        ],
	    },
	    "status": "active",
	    "createdAt": "12-05-2019 22:15:02",
	    "updatedAt": "12-05-2019 22:15:02"
	}
];

module.exports = accountMocks;