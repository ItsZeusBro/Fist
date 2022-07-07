export class Positionality{
    constructor(string){
        //if we don't catch it throw an exception
        

        this.tokens=[
            'end', 'mid', 'beg', 
            
            'b', 'mb', 'gb', 'tb', 
            
            '+', '/', '-', '*', 
            
            'e', '_', '%', '.']

    }
    search(string){

    }
    collect(){

    }
    atomEval(){

    }
    insert(){

    }
    compEval(){

    }
    sanitize(){
        
    }
}

//1. search for longest keywords first (remember position in string),
//2. collect its requirements (evaluate) from base string 
//3. insert in value ordered array of objects (repeat)
//4. evaluate compound expression
//5. translate it to sanitized object
//6. return sanitized object


//pseudo pattern 

//      ( end || mid || beg ) || 
//      [
//             
//                  ( + || - || / || * )                                            && 
//                  [
//
//                              [
//                                  
//                                  (0-inf)                                         && 
//                                  [
//                                      (b || mb || gb || tb)
//                                                                                  || 

//
//                                      (0.0-1.0)                                   || 

//                              
//                                      ( e )                                       && 
//                                      [ 
//                                          ( ( (_) && (0-inf) )  ||  (0-inf) )
//                                                                                  ||

//                                  
//                                          (0-100)                                 && 
//                                          [
//                                                (%||pct)
//                                          ]  
//                                      ]
//                                  ]
//                        
//                              ]
//                  ]
//                
//
//              
//        ] 
// Example strings:
// 'end', 'end-1b', 'end-1mb', 'end-10tb',
// 'end/5b', 'end/2mb', 'end/46gb', 'end/50tb',
// 'beg', 'beg+2b', 'beg+3gb', 'beg+4tb',
// 'beg*5b', 'beg*2mb', 'beg*46gb', 'beg*50tb',
// 'mid', 'mid+3b', 'mid+10mb', 'mid+1000gb', 'mid+10tb',
// 'mid-5b', 'mid-100mb', 'mid-100gb', 'mid-10tb',
// 'mid/5b', 'mid/10mb', 'mid/2gb', 'mid/100tb',
// 'mid+0.5', 'end+0.05', 'beg*0.003', 'beg/0.0005','mid*0.0000003', //some of these would be wrong in validation, but not sanitization
// 'mid*0.3e9', 'beg+0.4e_10', 'end+4e40', 'end-30e_3', 'mid+1e100',
// '1b+end', '2+mid', 'mid+2'