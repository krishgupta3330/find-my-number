// Indian telecom circle prefix lookup (first 3 digits of 10-digit mobile)
// Source: TRAI number allocation series
const indianPrefixMap: Record<string, { state: string; city: string; circle: string; operator?: string }> = {
  // 980
  "9800": { state: "West Bengal", city: "Kolkata", circle: "Kolkata" },
  "9801": { state: "Uttar Pradesh", city: "Lucknow", circle: "UP East" },
  "9802": { state: "Himachal Pradesh", city: "Shimla", circle: "Himachal Pradesh" },
  "9803": { state: "Punjab", city: "Chandigarh", circle: "Punjab" },
  "9804": { state: "West Bengal", city: "Kolkata", circle: "Kolkata" },
  "9805": { state: "Himachal Pradesh", city: "Shimla", circle: "Himachal Pradesh" },
  "9806": { state: "Assam & Northeast", city: "Guwahati", circle: "Assam" },
  "9807": { state: "Uttar Pradesh", city: "Varanasi", circle: "UP East" },
  "9808": { state: "Jammu & Kashmir", city: "Srinagar", circle: "J&K" },
  "9809": { state: "Uttar Pradesh", city: "Kanpur", circle: "UP West" },

  // 981 — Delhi
  "9810": { state: "Delhi", city: "New Delhi", circle: "Delhi", operator: "Airtel" },
  "9811": { state: "Delhi", city: "New Delhi", circle: "Delhi", operator: "Airtel" },
  "9812": { state: "Haryana", city: "Gurgaon", circle: "Haryana", operator: "Airtel" },
  "9813": { state: "Haryana", city: "Faridabad", circle: "Haryana" },
  "9814": { state: "Punjab", city: "Ludhiana", circle: "Punjab" },
  "9815": { state: "Punjab", city: "Amritsar", circle: "Punjab" },
  "9816": { state: "Himachal Pradesh", city: "Shimla", circle: "Himachal Pradesh" },
  "9817": { state: "Himachal Pradesh", city: "Dharamshala", circle: "Himachal Pradesh" },
  "9818": { state: "Delhi", city: "New Delhi", circle: "Delhi", operator: "Airtel" },
  "9819": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai" },

  // 982 — Mumbai
  "9820": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai", operator: "Vodafone" },
  "9821": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai", operator: "Vodafone" },
  "9822": { state: "Maharashtra", city: "Pune", circle: "Maharashtra" },
  "9823": { state: "Maharashtra", city: "Pune", circle: "Maharashtra" },
  "9824": { state: "Gujarat", city: "Surat", circle: "Gujarat" },
  "9825": { state: "Gujarat", city: "Ahmedabad", circle: "Gujarat" },
  "9826": { state: "Madhya Pradesh", city: "Bhopal", circle: "MP" },
  "9827": { state: "Madhya Pradesh", city: "Indore", circle: "MP" },
  "9828": { state: "Rajasthan", city: "Jaipur", circle: "Rajasthan" },
  "9829": { state: "Rajasthan", city: "Jodhpur", circle: "Rajasthan" },

  // 983 — West Bengal / Kolkata
  "9830": { state: "West Bengal", city: "Kolkata", circle: "Kolkata", operator: "Airtel" },
  "9831": { state: "West Bengal", city: "Kolkata", circle: "Kolkata" },
  "9832": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "9833": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai" },
  "9834": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai" },
  "9835": { state: "Bihar", city: "Patna", circle: "Bihar" },
  "9836": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "9837": { state: "Uttar Pradesh", city: "Meerut", circle: "UP West" },
  "9838": { state: "Uttar Pradesh", city: "Allahabad", circle: "UP East" },
  "9839": { state: "Uttar Pradesh", city: "Lucknow", circle: "UP East" },

  // 984 — Tamil Nadu / Chennai
  "9840": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu", operator: "Airtel" },
  "9841": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu" },
  "9842": { state: "Tamil Nadu", city: "Coimbatore", circle: "Tamil Nadu" },
  "9843": { state: "Tamil Nadu", city: "Madurai", circle: "Tamil Nadu" },
  "9844": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "9845": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka", operator: "Airtel" },
  "9846": { state: "Kerala", city: "Kochi", circle: "Kerala" },
  "9847": { state: "Kerala", city: "Thiruvananthapuram", circle: "Kerala" },
  "9848": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP" },
  "9849": { state: "Andhra Pradesh", city: "Visakhapatnam", circle: "AP" },

  // 985 — Maharashtra (Pune)
  "9850": { state: "Maharashtra", city: "Pune", circle: "Maharashtra", operator: "Vodafone" },
  "9851": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "9852": { state: "Jammu & Kashmir", city: "Jammu", circle: "J&K" },
  "9853": { state: "Odisha", city: "Bhubaneswar", circle: "Odisha" },
  "9854": { state: "Assam", city: "Guwahati", circle: "Assam" },
  "9855": { state: "Punjab", city: "Patiala", circle: "Punjab" },
  "9856": { state: "Jammu & Kashmir", city: "Srinagar", circle: "J&K" },
  "9857": { state: "Rajasthan", city: "Ajmer", circle: "Rajasthan" },
  "9858": { state: "Jammu & Kashmir", city: "Jammu", circle: "J&K" },
  "9859": { state: "Rajasthan", city: "Udaipur", circle: "Rajasthan" },

  // 986
  "9860": { state: "Maharashtra", city: "Pune", circle: "Maharashtra" },
  "9861": { state: "Odisha", city: "Bhubaneswar", circle: "Odisha" },
  "9862": { state: "Assam & Northeast", city: "Guwahati", circle: "Assam" },
  "9863": { state: "Assam & Northeast", city: "Guwahati", circle: "Assam" },
  "9864": { state: "Assam", city: "Dibrugarh", circle: "Assam" },
  "9865": { state: "Tamil Nadu", city: "Tiruchirappalli", circle: "Tamil Nadu" },
  "9866": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "9867": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai" },
  "9868": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9869": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai" },

  // 987 — Delhi
  "9870": { state: "Delhi", city: "New Delhi", circle: "Delhi", operator: "Reliance" },
  "9871": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9872": { state: "Punjab", city: "Chandigarh", circle: "Punjab" },
  "9873": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9874": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "9875": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "9876": { state: "Punjab", city: "Ludhiana", circle: "Punjab" },
  "9877": { state: "Punjab", city: "Amritsar", circle: "Punjab" },
  "9878": { state: "Punjab", city: "Jalandhar", circle: "Punjab" },
  "9879": { state: "Gujarat", city: "Ahmedabad", circle: "Gujarat" },

  // 988 — Karnataka / Bengaluru
  "9880": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka", operator: "Airtel" },
  "9881": { state: "Maharashtra", city: "Nagpur", circle: "Maharashtra" },
  "9882": { state: "Jammu & Kashmir", city: "Jammu", circle: "J&K" },
  "9883": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "9884": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu" },
  "9885": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "9886": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "9887": { state: "Rajasthan", city: "Jaipur", circle: "Rajasthan" },
  "9888": { state: "Punjab", city: "Chandigarh", circle: "Punjab" },
  "9889": { state: "Uttar Pradesh", city: "Agra", circle: "UP West" },

  // 989
  "9890": { state: "Maharashtra", city: "Pune", circle: "Maharashtra" },
  "9891": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9892": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai" },
  "9893": { state: "Madhya Pradesh", city: "Bhopal", circle: "MP" },
  "9894": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu" },
  "9895": { state: "Kerala", city: "Kozhikode", circle: "Kerala" },
  "9896": { state: "Haryana", city: "Gurgaon", circle: "Haryana" },
  "9897": { state: "Uttar Pradesh", city: "Meerut", circle: "UP West" },
  "9898": { state: "Gujarat", city: "Ahmedabad", circle: "Gujarat" },
  "9899": { state: "Delhi", city: "New Delhi", circle: "Delhi" },

  // 990 — Karnataka
  "9900": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka", operator: "Airtel" },
  "9901": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "9902": { state: "Karnataka", city: "Mysuru", circle: "Karnataka" },
  "9903": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "9904": { state: "Gujarat", city: "Surat", circle: "Gujarat" },
  "9905": { state: "Bihar", city: "Patna", circle: "Bihar" },
  "9906": { state: "Jammu & Kashmir", city: "Srinagar", circle: "J&K" },
  "9907": { state: "Madhya Pradesh", city: "Indore", circle: "MP" },
  "9908": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "9909": { state: "Gujarat", city: "Vadodara", circle: "Gujarat" },

  // 991 — Delhi
  "9910": { state: "Delhi", city: "New Delhi", circle: "Delhi", operator: "Airtel" },
  "9911": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9912": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "9913": { state: "Rajasthan", city: "Jaipur", circle: "Rajasthan" },
  "9914": { state: "Punjab", city: "Ludhiana", circle: "Punjab" },
  "9915": { state: "Punjab", city: "Chandigarh", circle: "Punjab" },
  "9916": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "9917": { state: "Uttarakhand", city: "Dehradun", circle: "Uttarakhand" },
  "9918": { state: "Uttar Pradesh", city: "Lucknow", circle: "UP East" },
  "9919": { state: "Uttar Pradesh", city: "Kanpur", circle: "UP East" },

  // 992 — Mumbai
  "9920": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai", operator: "Vodafone" },
  "9921": { state: "Maharashtra", city: "Pune", circle: "Maharashtra" },
  "9922": { state: "Maharashtra", city: "Aurangabad", circle: "Maharashtra" },
  "9923": { state: "Maharashtra", city: "Nashik", circle: "Maharashtra" },
  "9924": { state: "Gujarat", city: "Ahmedabad", circle: "Gujarat" },
  "9925": { state: "Gujarat", city: "Gandhinagar", circle: "Gujarat" },
  "9926": { state: "Madhya Pradesh", city: "Bhopal", circle: "MP" },
  "9927": { state: "Uttar Pradesh", city: "Moradabad", circle: "UP West" },
  "9928": { state: "Rajasthan", city: "Jaipur", circle: "Rajasthan" },
  "9929": { state: "Rajasthan", city: "Bikaner", circle: "Rajasthan" },

  // 993 — West Bengal
  "9930": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai" },
  "9931": { state: "Bihar", city: "Patna", circle: "Bihar" },
  "9932": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "9933": { state: "Bihar", city: "Patna", circle: "Bihar" },
  "9934": { state: "Bihar", city: "Gaya", circle: "Bihar" },
  "9935": { state: "Uttar Pradesh", city: "Varanasi", circle: "UP East" },
  "9936": { state: "Uttar Pradesh", city: "Lucknow", circle: "UP East" },
  "9937": { state: "Odisha", city: "Bhubaneswar", circle: "Odisha" },
  "9938": { state: "Odisha", city: "Cuttack", circle: "Odisha" },
  "9939": { state: "Bihar", city: "Patna", circle: "Bihar" },

  // 994 — Tamil Nadu
  "9940": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu", operator: "Airtel" },
  "9941": { state: "Tamil Nadu", city: "Coimbatore", circle: "Tamil Nadu" },
  "9942": { state: "Tamil Nadu", city: "Madurai", circle: "Tamil Nadu" },
  "9943": { state: "Tamil Nadu", city: "Salem", circle: "Tamil Nadu" },
  "9944": { state: "Tamil Nadu", city: "Tiruchirappalli", circle: "Tamil Nadu" },
  "9945": { state: "Karnataka", city: "Mangaluru", circle: "Karnataka" },
  "9946": { state: "Kerala", city: "Kochi", circle: "Kerala" },
  "9947": { state: "Kerala", city: "Thiruvananthapuram", circle: "Kerala" },
  "9948": { state: "Andhra Pradesh", city: "Tirupati", circle: "AP" },
  "9949": { state: "Andhra Pradesh", city: "Vijayawada", circle: "AP" },

  // 995 — Haryana
  "9950": { state: "Haryana", city: "Gurgaon", circle: "Haryana" },
  "9951": { state: "Haryana", city: "Faridabad", circle: "Haryana" },
  "9952": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu" },
  "9953": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9954": { state: "Assam", city: "Guwahati", circle: "Assam" },
  "9955": { state: "Bihar", city: "Patna", circle: "Bihar" },
  "9956": { state: "Uttar Pradesh", city: "Bareilly", circle: "UP West" },
  "9957": { state: "Assam", city: "Silchar", circle: "Assam" },
  "9958": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9959": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },

  // 996
  "9960": { state: "Maharashtra", city: "Pune", circle: "Maharashtra" },
  "9961": { state: "Kerala", city: "Thiruvananthapuram", circle: "Kerala" },
  "9962": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu" },
  "9963": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "9964": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "9965": { state: "Tamil Nadu", city: "Tirunelveli", circle: "Tamil Nadu" },
  "9966": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "9967": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai" },
  "9968": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9969": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai" },

  // 997
  "9970": { state: "Maharashtra", city: "Pune", circle: "Maharashtra" },
  "9971": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9972": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "9973": { state: "Bihar", city: "Patna", circle: "Bihar" },
  "9974": { state: "Gujarat", city: "Ahmedabad", circle: "Gujarat" },
  "9975": { state: "Maharashtra", city: "Nagpur", circle: "Maharashtra" },
  "9976": { state: "Maharashtra", city: "Aurangabad", circle: "Maharashtra" },
  "9977": { state: "Madhya Pradesh", city: "Jabalpur", circle: "MP" },
  "9978": { state: "Gujarat", city: "Rajkot", circle: "Gujarat" },
  "9979": { state: "Gujarat", city: "Vadodara", circle: "Gujarat" },

  // 998 — Karnataka
  "9980": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka", operator: "Airtel" },
  "9981": { state: "Madhya Pradesh", city: "Bhopal", circle: "MP" },
  "9982": { state: "Rajasthan", city: "Jodhpur", circle: "Rajasthan" },
  "9983": { state: "Rajasthan", city: "Kota", circle: "Rajasthan" },
  "9984": { state: "Uttar Pradesh", city: "Kanpur", circle: "UP West" },
  "9985": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "9986": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "9987": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai" },
  "9988": { state: "Punjab", city: "Ludhiana", circle: "Punjab" },
  "9989": { state: "Andhra Pradesh", city: "Vijayawada", circle: "AP" },

  // 999 — Delhi/UP
  "9990": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9991": { state: "Haryana", city: "Gurgaon", circle: "Haryana" },
  "9992": { state: "Haryana", city: "Rohtak", circle: "Haryana" },
  "9993": { state: "Madhya Pradesh", city: "Gwalior", circle: "MP" },
  "9994": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu" },
  "9995": { state: "Kerala", city: "Thrissur", circle: "Kerala" },
  "9996": { state: "Haryana", city: "Ambala", circle: "Haryana" },
  "9997": { state: "Uttar Pradesh", city: "Agra", circle: "UP West" },
  "9998": { state: "Gujarat", city: "Surat", circle: "Gujarat" },
  "9999": { state: "Delhi", city: "New Delhi", circle: "Delhi" },

  // 8 series
  "8800": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "8801": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "8802": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "8826": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "8860": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "8527": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "8700": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "8750": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "8130": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "8287": { state: "Delhi", city: "New Delhi", circle: "Delhi" },

  // 7 series
  "7000": { state: "Madhya Pradesh", city: "Bhopal", circle: "MP" },
  "7001": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "7002": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "7003": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "7004": { state: "Bihar", city: "Patna", circle: "Bihar" },
  "7005": { state: "Jammu & Kashmir", city: "Jammu", circle: "J&K" },
  "7006": { state: "Jammu & Kashmir", city: "Srinagar", circle: "J&K" },
  "7007": { state: "Uttar Pradesh", city: "Lucknow", circle: "UP East" },
  "7008": { state: "Odisha", city: "Bhubaneswar", circle: "Odisha" },
  "7009": { state: "Punjab", city: "Chandigarh", circle: "Punjab" },
  "7010": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu" },
  "7200": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "7201": { state: "Uttar Pradesh", city: "Allahabad", circle: "UP East" },
  "7400": { state: "Madhya Pradesh", city: "Bhopal", circle: "MP" },
  "7500": { state: "Uttar Pradesh", city: "Lucknow", circle: "UP East" },
  "7503": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "7506": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai" },
  "7507": { state: "Maharashtra", city: "Pune", circle: "Maharashtra" },
  "7508": { state: "Punjab", city: "Ludhiana", circle: "Punjab" },
  "7814": { state: "Punjab", city: "Chandigarh", circle: "Punjab" },
  "7895": { state: "Andhra Pradesh", city: "Visakhapatnam", circle: "AP" },

  // 6 series
  "6000": { state: "Assam", city: "Guwahati", circle: "Assam" },
  "6001": { state: "Assam", city: "Guwahati", circle: "Assam" },
  "6002": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "6003": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "6200": { state: "Bihar", city: "Patna", circle: "Bihar" },
  "6201": { state: "Bihar", city: "Muzaffarpur", circle: "Bihar" },
  "6290": { state: "Bihar", city: "Patna", circle: "Bihar" },
  "6300": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "6301": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu" },
  "6350": { state: "Rajasthan", city: "Jaipur", circle: "Rajasthan" },
  "6360": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "6361": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "6362": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "6363": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "6364": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "6366": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "6370": { state: "Odisha", city: "Bhubaneswar", circle: "Odisha" },
  "6371": { state: "Odisha", city: "Bhubaneswar", circle: "Odisha" },
  "6372": { state: "Odisha", city: "Bhubaneswar", circle: "Odisha" },
  "6374": { state: "Odisha", city: "Cuttack", circle: "Odisha" },
  "6375": { state: "Rajasthan", city: "Jaipur", circle: "Rajasthan" },
  "6376": { state: "Rajasthan", city: "Jodhpur", circle: "Rajasthan" },
  "6377": { state: "Rajasthan", city: "Udaipur", circle: "Rajasthan" },
  "6378": { state: "Rajasthan", city: "Kota", circle: "Rajasthan" },
  "6379": { state: "Tamil Nadu", city: "Madurai", circle: "Tamil Nadu" },
  "6380": { state: "Tamil Nadu", city: "Coimbatore", circle: "Tamil Nadu" },
  "6381": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu" },
  "6382": { state: "Tamil Nadu", city: "Tiruchirappalli", circle: "Tamil Nadu" },
  "6383": { state: "Tamil Nadu", city: "Salem", circle: "Tamil Nadu" },
  "6384": { state: "Tamil Nadu", city: "Tirunelveli", circle: "Tamil Nadu" },
  "6385": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu" },
  "6386": { state: "Meghalaya", city: "Shillong", circle: "Northeast" },
  "6387": { state: "Assam", city: "Guwahati", circle: "Assam" },
  "6388": { state: "Assam", city: "Guwahati", circle: "Assam" },
  "6389": { state: "Assam", city: "Guwahati", circle: "Assam" },
  "6390": { state: "Uttar Pradesh", city: "Lucknow", circle: "UP East" },
  "6391": { state: "Uttar Pradesh", city: "Kanpur", circle: "UP East" },
  "6392": { state: "Uttar Pradesh", city: "Allahabad", circle: "UP East" },
  "6393": { state: "Uttar Pradesh", city: "Varanasi", circle: "UP East" },
  "6394": { state: "Uttar Pradesh", city: "Agra", circle: "UP West" },
  "6395": { state: "Uttar Pradesh", city: "Meerut", circle: "UP West" },
  "6396": { state: "Uttar Pradesh", city: "Bareilly", circle: "UP West" },
  "6397": { state: "Uttar Pradesh", city: "Moradabad", circle: "UP West" },
  "6398": { state: "Uttar Pradesh", city: "Saharanpur", circle: "UP West" },
  "6399": { state: "Uttarakhand", city: "Dehradun", circle: "Uttarakhand" },

  // 965x series
  "9650": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9651": { state: "Uttar Pradesh", city: "Lucknow", circle: "UP East" },
  "9652": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "9653": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai" },
  "9654": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9655": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu" },
  "9656": { state: "Kerala", city: "Kochi", circle: "Kerala" },
  "9657": { state: "Maharashtra", city: "Pune", circle: "Maharashtra" },
  "9658": { state: "Rajasthan", city: "Jaipur", circle: "Rajasthan" },
  "9659": { state: "Rajasthan", city: "Jodhpur", circle: "Rajasthan" },

  "9660": { state: "Rajasthan", city: "Jaipur", circle: "Rajasthan" },
  "9661": { state: "Bihar", city: "Patna", circle: "Bihar" },
  "9662": { state: "Assam", city: "Guwahati", circle: "Assam" },
  "9663": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "9664": { state: "Rajasthan", city: "Kota", circle: "Rajasthan" },
  "9665": { state: "Maharashtra", city: "Pune", circle: "Maharashtra" },
  "9666": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "9667": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9668": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "9669": { state: "Madhya Pradesh", city: "Bhopal", circle: "MP" },

  "9670": { state: "Uttar Pradesh", city: "Lucknow", circle: "UP East" },
  "9671": { state: "Haryana", city: "Gurgaon", circle: "Haryana" },
  "9672": { state: "Rajasthan", city: "Jodhpur", circle: "Rajasthan" },
  "9673": { state: "Maharashtra", city: "Pune", circle: "Maharashtra" },
  "9674": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "9675": { state: "Assam", city: "Guwahati", circle: "Assam" },
  "9676": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "9677": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu" },
  "9678": { state: "Assam", city: "Guwahati", circle: "Assam" },
  "9679": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },

  "9680": { state: "Rajasthan", city: "Jaipur", circle: "Rajasthan" },
  "9681": { state: "West Bengal", city: "Kolkata", circle: "West Bengal" },
  "9682": { state: "Jammu & Kashmir", city: "Srinagar", circle: "J&K" },
  "9683": { state: "Odisha", city: "Bhubaneswar", circle: "Odisha" },
  "9684": { state: "Madhya Pradesh", city: "Indore", circle: "MP" },
  "9685": { state: "Madhya Pradesh", city: "Bhopal", circle: "MP" },
  "9686": { state: "Karnataka", city: "Bengaluru", circle: "Karnataka" },
  "9687": { state: "Gujarat", city: "Ahmedabad", circle: "Gujarat" },
  "9688": { state: "Tamil Nadu", city: "Coimbatore", circle: "Tamil Nadu" },
  "9689": { state: "Maharashtra", city: "Nashik", circle: "Maharashtra" },

  "9690": { state: "Uttar Pradesh", city: "Meerut", circle: "UP West" },
  "9691": { state: "Madhya Pradesh", city: "Jabalpur", circle: "MP" },
  "9692": { state: "Jharkhand", city: "Ranchi", circle: "Bihar/Jharkhand" },
  "9693": { state: "Jharkhand", city: "Dhanbad", circle: "Bihar/Jharkhand" },
  "9694": { state: "Rajasthan", city: "Bikaner", circle: "Rajasthan" },
  "9695": { state: "Uttar Pradesh", city: "Gorakhpur", circle: "UP East" },
  "9696": { state: "Uttar Pradesh", city: "Allahabad", circle: "UP East" },
  "9697": { state: "Jammu & Kashmir", city: "Jammu", circle: "J&K" },
  "9698": { state: "Jammu & Kashmir", city: "Srinagar", circle: "J&K" },
  "9699": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai" },

  "9700": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "9701": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "9702": { state: "Maharashtra", city: "Mumbai", circle: "Mumbai" },
  "9703": { state: "Andhra Pradesh", city: "Hyderabad", circle: "AP/Telangana" },
  "9704": { state: "Andhra Pradesh", city: "Visakhapatnam", circle: "AP" },
  "9705": { state: "Andhra Pradesh", city: "Vijayawada", circle: "AP" },
  "9706": { state: "Assam", city: "Guwahati", circle: "Assam" },
  "9707": { state: "Assam", city: "Dibrugarh", circle: "Assam" },
  "9708": { state: "Bihar", city: "Patna", circle: "Bihar" },
  "9709": { state: "Bihar", city: "Muzaffarpur", circle: "Bihar" },

  "9710": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu" },
  "9711": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9712": { state: "Gujarat", city: "Ahmedabad", circle: "Gujarat" },
  "9713": { state: "Madhya Pradesh", city: "Bhopal", circle: "MP" },
  "9714": { state: "Gujarat", city: "Rajkot", circle: "Gujarat" },
  "9715": { state: "Tamil Nadu", city: "Chennai", circle: "Tamil Nadu" },
  "9716": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9717": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9718": { state: "Delhi", city: "New Delhi", circle: "Delhi" },
  "9719": { state: "Uttarakhand", city: "Dehradun", circle: "Uttarakhand" },
};

// US area codes
const usAreaCodeMap: Record<string, { state: string; city: string }> = {
  "201": { state: "New Jersey", city: "Jersey City" },
  "202": { state: "Washington DC", city: "Washington" },
  "203": { state: "Connecticut", city: "New Haven" },
  "206": { state: "Washington", city: "Seattle" },
  "212": { state: "New York", city: "New York City" },
  "213": { state: "California", city: "Los Angeles" },
  "214": { state: "Texas", city: "Dallas" },
  "215": { state: "Pennsylvania", city: "Philadelphia" },
  "216": { state: "Ohio", city: "Cleveland" },
  "217": { state: "Illinois", city: "Springfield" },
  "312": { state: "Illinois", city: "Chicago" },
  "313": { state: "Michigan", city: "Detroit" },
  "314": { state: "Missouri", city: "St. Louis" },
  "323": { state: "California", city: "Los Angeles" },
  "404": { state: "Georgia", city: "Atlanta" },
  "408": { state: "California", city: "San Jose" },
  "415": { state: "California", city: "San Francisco" },
  "425": { state: "Washington", city: "Seattle" },
  "469": { state: "Texas", city: "Dallas" },
  "480": { state: "Arizona", city: "Phoenix" },
  "503": { state: "Oregon", city: "Portland" },
  "512": { state: "Texas", city: "Austin" },
  "571": { state: "Virginia", city: "Arlington" },
  "602": { state: "Arizona", city: "Phoenix" },
  "614": { state: "Ohio", city: "Columbus" },
  "617": { state: "Massachusetts", city: "Boston" },
  "619": { state: "California", city: "San Diego" },
  "650": { state: "California", city: "Palo Alto" },
  "702": { state: "Nevada", city: "Las Vegas" },
  "713": { state: "Texas", city: "Houston" },
  "718": { state: "New York", city: "Brooklyn/Queens" },
  "720": { state: "Colorado", city: "Denver" },
  "800": { state: "Toll-Free", city: "Nationwide" },
  "818": { state: "California", city: "Los Angeles (Valley)" },
  "917": { state: "New York", city: "New York City" },
  "949": { state: "California", city: "Orange County" },
};

// UK area codes
const ukAreaCodeMap: Record<string, { region: string; city: string }> = {
  "20": { region: "England", city: "London" },
  "121": { region: "England", city: "Birmingham" },
  "131": { region: "Scotland", city: "Edinburgh" },
  "141": { region: "Scotland", city: "Glasgow" },
  "151": { region: "England", city: "Liverpool" },
  "161": { region: "England", city: "Manchester" },
  "113": { region: "England", city: "Leeds" },
  "114": { region: "England", city: "Sheffield" },
  "115": { region: "England", city: "Nottingham" },
  "116": { region: "England", city: "Leicester" },
  "117": { region: "England", city: "Bristol" },
  "118": { region: "England", city: "Reading" },
  "1382": { region: "Scotland", city: "Dundee" },
  "1224": { region: "Scotland", city: "Aberdeen" },
  "29": { region: "Wales", city: "Cardiff" },
  "28": { region: "Northern Ireland", city: "Belfast" },
};

export interface DetailedLocation {
  state?: string;
  city?: string;
  circle?: string;
  operator?: string;
  areaCode?: string;
}

export function getDetailedLocation(nationalNumber: string, countryCode: string): DetailedLocation {
  if (countryCode === "IN") {
    const prefix4 = nationalNumber.slice(0, 4);
    const match = indianPrefixMap[prefix4];
    if (match) {
      return {
        state: match.state,
        city: match.city,
        circle: match.circle,
        operator: match.operator,
        areaCode: prefix4,
      };
    }
    return {};
  }

  if (countryCode === "US") {
    const areaCode = nationalNumber.slice(0, 3);
    const match = usAreaCodeMap[areaCode];
    if (match) {
      return { state: match.state, city: match.city, areaCode };
    }
    return {};
  }

  if (countryCode === "GB") {
    for (const code of ["1382", "1224", "121", "131", "141", "151", "161", "113", "114", "115", "116", "117", "118", "29", "28", "20"]) {
      if (nationalNumber.startsWith(code)) {
        const match = ukAreaCodeMap[code];
        if (match) return { state: match.region, city: match.city, areaCode: code };
      }
    }
    return {};
  }

  return {};
}
