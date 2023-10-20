var Cars = {
    Honda: {
             Civic: {
              type: {
                image:"car images/civic.avif",
                 name: "Honda Civic ",
                 price: 200000,
                 gates: 4,
                 model: 2006,
                 wheels: 4,
                 colors : ["red","green","blue"]
              }
             },
             Accord: {
                 type: {
                image: "car images/accord.avif" ,   
                 name: "Honda Accord",
                 price: 300000,
                 gates: 4,
                 model: 2009,
                 wheels: 4,
                 colors : ["silver","black","grey"]
               } 
            },
        Fit:{
            type:{
                image:"car images/fit.avif",
                name:"Honda Fit",
                price: 400000,
                gates: 4,
                model: 2010,
                wheels: 4,
                colors : ["blue","black","green"]
            }
        },
        Pillot:{
         type:{
            image:"car images/pilot.webp",
            name:"Honda Pillot",
            price: 400000,
            gates: 4,
                model: 2010,
                wheels: 4,
                colors : ["blue","red","black"]
            }   
            
        },
        Ridgeline: {
            type:{
                image:"car images/Ridgeline.jpg",
                name:"Honda Ridgeline",
                price: 500000,
                gates: 4,
                model: 2010,
                wheels: 4,
                colors : ["blue","red","black"]
            }
        },
        crv: {
          model:{
            image:"car images/crv.jpg",
            name: "Honda crv",
            price: 600000,
            gates: 4,
            model: 2011,
            wheels: 4,
            colors : ["blue","red","black"]
        }  
        },
        hrv:{
            type:{
                image:"car images/hrv.webp",
                name: "Honda hrv",
                price: 700000,
                gates: 4,
            model: 2012,
            wheels: 4,
            colors : ["blue","yellow","black"]
        } 
    }
},
        Nissan:{
            Altima:{
                type:{
                    image:"car images/altima.jpg",
                    name:"Nissan Altima",
                    price: 800000,
                    gates: 4,
                    model: 2012,
                    wheels: 4,
                    colors : ["blue","grey","black"]
                }
            },
            Maxima:{
                type:{
                    image:"car images/maxima.img",
                name:"Nissan Maxima",
                price: 900000,
                gates: 4,
                model: 2013,
                wheels: 4,
                colors : ["purple","grey","black"]
            }
        },
        Sentra:{
            type:{
                image:"car images/sentra.webp",
                name:"Nissan Sentra",
                price: 100000,
                gates: 4,
                model: 2013,
                wheels: 4,
                colors : ["purple","grey","red"]
            }
        },
        Versa:{
            type:{
                image:"car images/versa.avif",
                name:"Nissan Versa",
                price: 100000,
                gates: 4,
                model: 2014,
                wheels: 4,
                colors : ["blue","grey","red"]
            }
        }
    },
        Audi:{
            RS3:{
                type:{
                    image:"car images/rs3.webp",
                    name:"Audi RS3",
                    price: 1110000,
                gates: 4,
                model: 2015,
                wheels: 4,
                colors : ["black","grey","red"]
            }
        },
        RS7:{
            type:{
                image:"car images/rs7.jpg",
                name:"Audi RS7",
                price: 1120000,
                gates: 4,
                model: 2016,
                wheels: 4,
                colors : ["blue","grey","silver"]
            }
        },
        TT:{
            type:{
                image:"car images/tt.jpg",
                name:"Audi TT",
            price: 1130000,
            gates: 4,
            model: 2017,
            wheels: 4,
            colors : ["green","grey","silver"]
        }
          },  
          Q8:{
              type:{
                image:"car images/q8.jpg",
                  name:"Audi Q8",
                  price: 1130000,
                  gates: 4,
                  model: 2017,
                  wheels: 4,
              colors : ["white","grey","silver"]
            }
        }
    },
        Hyundai:{
            Accent:{
                type:{
                    image:"car images/accent.jpg",
                    name:"Hyundai Accent",
                    price: 1130000,
                    gates: 4,
                    model: 2019,
                    wheels: 4,
                    colors : ["white","red","silver"]
                }
            },
            Elantra:{
                type:{
                    image:"car images/Elantra.jpg",
                name:"Hyundai Elantra",
                price: 1140000,
                gates: 4,
                model: 2019,
                wheels: 4,
                colors : ["white","red","silver"]
            }
        },
        Sonata:{
            type:{
                image:"car images/sonata.jpg",
                name:"Hyundai Sonata",
                price: 1140000,
                gates: 4,
                model: 2020,
                wheels: 4,
                colors : ["white","red","silver"]
            }
        },
        Azera:{
            type:{
                image:"car images/azeera.avif",
                name:"Hyundai Azera",
                price: 1140000,
                gates: 4,
                model: 2021,
                wheels: 4,
                colors : ["white","red","silver"]
            }
        }
    },
        Subaru:{
            Forester:{
                type:{
                    image:"car images/forester.webp",
                    name:"Subaru  Forester",
                    price: 1150000,
                    gates: 4,
                    model: 2020,
                    wheels: 4,
                    colors : ["black","red","silver"]
                }
            },
            Impreza:{
                type:{
                    image:"car images/Impreza.jpg",
                    nmae:"Subaru Impreza",
                    price: 1160000,
                    gates: 4,
                    model: 2020,
                    wheels: 4,
                    colors : ["black","red","purple"]
                }
            },
            WRX:{
                type:{
                    image:"car images/wrx.avif",
                    name:"Subaru WRX",
                    price: 1160000,
                    gates: 4,
                    model: 2020,
                    wheels: 4,
                    colors : ["black","blue","purple"]
                }
            },
            Outback:{
                type:{
                    image:"car images/Outback.png",
                    name:"Subaru Outback",
                    price: 1160000,
                    gates: 4,
                    model: 2020,
                    wheels: 4,
                    colors : ["black","blue","purple"]
                }
            }
             
        },
        Lexus:{
            LSHybrid:{
                type:{
                    image:"car images/LS-Hybrid.jpg",
                    name:"Lexus LSHybrid",
                    price: 1160000,
                    gates: 4,
                    model: 2021,
                    wheels: 4,
                    colors : ["black","blue","purple"]
                }
            },
            GX:{
                type:{
                    image:"car images/gx.avif",
                    name:"Lexus GX",
                    price: 1170000,
                    gates: 4,
                    model: 2021,
                    wheels: 4,
                    colors : ["black","blue","grey"]
                }
            },
            LS:{
                type:{
                    image:"car images/ls.jpg",
                    name:"Lexus LS",
                    price: 1160000,
                    gates: 4,
                    model: 2021,
                    wheels: 4,
                    colors : ["black","blue","purple"]
                }
            }

        },
        Porsche:{
            Cayenne:{
                type:{
                    image:"car images/Cayenne.jpg",
                    name:"Porsche Cayenne",
                    price: 1160000,
                    gates: 2,
                    model: 2021,
                    wheels: 4,
                    colors : ["black","blue","purple"]
                }
            },
            Macan:{
                type:{
                    image:"car images/macan.jpg",
                    name:"Porsche  Macan",
                    price: 1190000,
                    gates: 2,
                    model: 2021,
                    wheels: 4,
                    colors : ["black","blue","white"]
                }
            },
            Panamera:{
                type:{
                    image:"car images/Panamera.jpg",
                    name:"Porsche Panamera",
                    price: 1190000,
                    gates: 2,
                    model: 2021,
                    wheels: 4,
                    colors : ["black","blue","white"]
                }
            }
        },

        Chevrolet:{
            Sonic:{
                type:{
                    image:"car images/sonic.jpg",
                    name:"Chevrolet Sonic",
                    price: 1190000,
                    gates: 4,
                    model: 2023,
                    wheels: 4,
                    colors : ["black","yellow","blue"]
                }
            },
            Malibu:{
                type:{
                    image:"car images/malibu.jpg",
                    name:"Chevrolet Malibu",
                    price: 1220000,
                    gates: 4,
                    model: 2023,
                    wheels: 4,
                    colors : ["black","yellow","green"]
                }
            },

        },
        Ford:{
            Mustang:{
                type:{
                    image:"car images/Mustang.jpg",
                    name:"Ford Mustang",
                    price: 1220000,
                    gates: 4,
                    model: 2023,
                    wheels: 4,
                    colors : ["black","yellow","dilver"]
                }
                
            },
            Escape:{
                type:{
                    image:"car images/Escape.jpg",
                    name:"Ford  Escape",
                    price: 1220000,
                    gates: 4,
                    model: 2023,
                    wheels: 4,
                    colors : ["black","yellow","green"]
                }
            },
            Bronco:{
                type:{
                    image:"car images/Bronco.jpg",
                    name:"Ford Bronco",
                    price: 1220000,
                    gates: 4,
                    model: 2023,
                    wheels: 4,
                    colors : ["black","yellow","grey"]
                }
            }
        },
        Tesla:{
            Roadster:{
                type:{
                    image:"car images/Roadster.jpg",
                    nmae:"Tesla Roadster",
                    price: 1340000,
                    gates: 4,
                    model: 2023,
                    wheels: 4,
                    colors : ["black","orange","red"]
                }
            },
            ModelY:{
                type:{
                    image:"car images/ModelY.jpg",
                    name:"Tesla ModelY",
                    price: 1340000,
                    gates: 4,
                    model: 2023,
                    wheels: 4,
                    colors : ["black","orange","blue"]
                }
            }
        },

        Cadillac:{
            Lyriq:{
                type:{
                    image:"car images/lyriq.jpg",
                    name:"Cadillac Lyriq",
                    price: 1560000,
                    gates: 4,
                    model: 2023,
                    wheels: 4,
                    colors : ["black","orange","green"]
                }
            },
            Escalade:{
                type:{
                    image:"car images/Escalade.jpg",
                    name:"Cadillac Escalade",
                    price: 1560000,
                    gates: 4,
                    model: 2023,
                    wheels: 4,
                    colors : ["silver","grey","orange"]
                }

            },
            CTS:{
                type:{
                    image:"car images/CTS.jpg",
                    name:"Cadillac CTS",
                    price: 1560000,
                    gates: 4,
                    model: 2023,
                    wheels: 4,
                    colors : ["silver","grey","orange"]
                }
            },
            ATS:{
                type:{
                    image:"car images/ATS.jpg", 
                    name:"Cadillac ATS",
                    price: 1560000,
                    gates: 4,
                    model: 2019,
                    wheels: 4,
                    colors : ["silver","grey","blue"]
                }
            }
            
        },
        Jeep:{
           Wrangler:{ 
            type:{
                image:"car images/wrangler.jpg",
                name:"jeep Wrangler",
                price: 1999900,
                    gates: 4,
                    model: 2024,
                    wheels: 4,
                    colors : ["red","black","blue"]
            }
        },
        Renegade:{
            type:{
                image:"car images/Renegade.jpg",
                name:"Jeep Renegade",
                price: 19999000,
                gates: 4,
                model: 2024,
                wheels: 4,
                colors : ["red","black","grey"]
            }
        },
        Cherokee:{
            type:{
                image:"car images/cherok.jpg",
                name:"Jeep Cherokee",
                price: 19999000,
                gates: 4,
                model: 2024,
                wheels: 4,
                colors : ["red","black","silver"]
            }
        },
        Compass:{
            type:{
                image:"car images/Compass.jpg",
                name:"Jeep Compass",
                price: 19999000,
                gates: 4,
                model: 2024,
                wheels: 4,
                colors : ["red","black","blue"]
            }
        }
        },

        MercedesBenz:{
            Maybach:{
                type:{
                    image:"car images/maych.jpg",
                    name:"MercedesBenz Maybach",
                    price: 19999000,
                    gates: 4,
                    model: 2024,
                    wheels: 4,
                    colors : ["red","black","purple"]
                }
    
            },
            GLC:{
                type:{
                    image:"car images/glc.jpg",
                    name:" MercedesBenz GLC",
                    price: 19999000,
                    gates: 4,
                    model: 2024,
                    wheels: 4,
                    colors : ["red","black","silver"]
                }
            }
        },
        Kia:{
            Cadenza:{
                type:{
                    image:"car images/cadenza.jpg",
                    name:"Kia Cadenza",
                    price: 19999000,
                    gates: 4,
                    model: 2024,
                    wheels: 4,
                    colors : ["red","black","grey"]
                }
            },
            Stinger:{
                type:{
                    image:"car images/Stinger.jpg",
                    name:"Kia Stinger",
                    price: 19999000,
                    gates: 4,
                    model: 2024,
                    wheels: 4,
                    colors : ["red","black","blue"]
                }
            },
            Sorento:{
                type:{
                    image:"car images/Sorento.jpg",
                    name:"Kia Sorento",
                    price: 19999000,
                    gates: 4,
                    model: 2024,
                    wheels: 4,
                    colors : ["red","black","yellow"]
                }
            }

        }


    }




    var company = document.getElementById("company")
    var brand = document.getElementById("brand")
    var allcars = document.getElementById("allcars")

    company.innerHTML = ` <option value="">Select Company</option> `
    brand.innerHTML = ` <option value="">Select Company</option> `


    for(var key in Cars){
        
        company.innerHTML += `
        <option value="${key}">${key.toUpperCase()}</option>
        `
        for(var key1 in Cars[key]){
        for(var key2 in Cars[key][key1]){
            var carData = Cars[key][key1][key2];
            var colorsDiv = "";
            for(var i = 0; i < carData.colors.length; i++){
                colorsDiv += `<div class="me-2" style=  "width: 20px; height: 20px; border-radius: 10px; background-color: ${carData.colors[i]}"></div>`
            }
            allcars.innerHTML += `
            <div class="col mb-2">
            <div class="card" >
            <img src="${carData.image}" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">${carData.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${carData.model}</h6>
                <h2>Rs${carData.price}</h2>
                <div class="d-flex">
                ${colorsDiv}
                </div>
              </div>
            </div>
          </div>
            `
         }
        }                      
    }     

    
    function oncompanychange(){
        brand.innerHTML = "";
        brand.innerHTML = ` <option value="">Select Company</option> `
        
        for(var key in Cars [company.value]){
            console.log(key)
            brand.innerHTML += `
        <option value="${key}">${key.toUpperCase()}</option>
        
        `
    }
}      

function filtercars(){
    var carData = Cars[company.value][brand.value].type
    var colorsDiv = "";
    for(var i = 0; i < carData.colors.length; i++){
        colorsDiv += `<div class="me-2" style=  "width: 20px; height: 20px; border-radius: 10px; background-color: ${carData.colors[i]}"></div>`
        }
        allcars.innerHTML = `
        <div class="col mb-2">
        <div class="card">
        <img style="height: 400px; " src="${carData.image}" class="card-img-top" alt="...">
        
        <div class="card-body">
        <h5 class="card-title">${carData.name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${carData.model}</h6>
            <h2>Rs${carData.price}</h2>
            <div class="d-flex">
            ${colorsDiv}
            </div>
          </div>
        </div>
      </div>
        `
    }






