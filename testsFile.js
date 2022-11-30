                /*
                // STEP 1: On déclare nos trois variables, une par dé, et une pour le résultat de la combinaison de dés par concaténation.
                let testArray = [1, 2, 3, 4]
                console.log(testArray);
                console.log(typeof testArray);

                let theFourHundredFourtyOneArray = []
                let firstNumber = Math.floor(Math.random() * 10);
                console.log(firstNumber); // verification à la console
                // theFourHundredFourtyOneArray.push(firstNumber);
               // console.log(theFourHundredFourtyOneArray);
                
                let secondNumber = Math.floor(Math.random() * 10);
                console.log(secondNumber); // verification à la console
                // theFourHundredFourtyOneArray.push(secondNumber);
                // console.log(theFourHundredFourtyOneArray);
                let thirdNumber = Math.floor(Math.random() * 10);
                console.log(thirdNumber); // verification à la console
                // theFourHundredFourtyOneArray.push(thirdNumber);
                // console.log(theFourHundredFourtyOneArray);
                theFourHundredFourtyOneArray.push(firstNumber, secondNumber, thirdNumber);
                console.log(theFourHundredFourtyOneArray);


                               // console.log(parseInt(dicesResult));
                // let dicesResultNrk = parseInt(dicesResult); 
                // let dicesInArr = [dicesResultNrk];
                /* console.log(typeof dicesResult);
                console.log(typeof dicesResultNrk);
                console.log(dicesResultNrk);
                console.log(dicesInArr);
                console.log(typeof dicesInArr); */

                // STEP 2: 

      */

                // VF:
                                // STEP 1: On déclare nos trois variables, une par dé, et une pour le résultat de la combinaison de dés par concaténation.

                                let theFourHundredFourtyOneArray = []
                                let firstNumber = Math.floor(Math.random() * 10);
                                let secondNumber = Math.floor(Math.random() * 10);
                                let thirdNumber = Math.floor(Math.random() * 10);
                     
                                theFourHundredFourtyOneArray.push(firstNumber, secondNumber, thirdNumber);
                                console.log(theFourHundredFourtyOneArray);
                
                                // STEP 2: Generating all possible combinations
                      
                                // const amountOfTin = 3;
                                dataTemp = [];
                                index = 0;
                
                      function combinationUtil(theFourHundredFourtyOneArray, dataTemp, start, end, index, r) {
                                    // Current combination is ready to be printed, print it
                                    if (index == r) {
                                        for (let j = 0; j < r; j++) {
                                            alert(dataTemp[j] + " ");
                                        }
                                        alert("<br>")
                                    }
                          for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
                                        dataTemp[index] = theFourHundredFourtyOneArray[i];
                                        combinationUtil(theFourHundredFourtyOneArray, dataTemp, i + 1, end, index + 1, r);
                                    }
                                }
                 // The main function that prints all combinations of size r
                                // in arr[] of size n. This function mainly uses combinationUtil()
                                function printCombination(theFourHundredFourtyOneArray, n, r) {
                                    // A temporary array to store all combination one by one
                                    let dataTemp = new Array(r);
                
                                    // Sorting Array
                                    dataTemp.sort();
                
                                    // Print all combination using temporary array 'data[]'
                                    combinationUtil(theFourHundredFourtyOneArray, dataTemp, 0, n - 1, 0, r);
                                }
                /*Driver function to check for above function*/
                                var theFourHundredFourtyOneArrayTest = [1, 2, 3, 4, 5];
                                let r = 3;
                                let n = theFourHundredFourtyOneArrayTest.length;
                                printCombination(theFourHundredFourtyOneArrayTest, n, r);
                
                                // Since the elements are sorted, all occurrences of an element
                                // must be together
                                while (theFourHundredFourtyOneArrayTest[i] == theFourHundredFourtyOneArrayTest[i + 1])
                                    i++;
                        
                             
                                
                
                
                            
             
                


            