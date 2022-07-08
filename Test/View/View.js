import {Fist} from "../../Fist.js"
import { Comet } from "../../Comet/Comet.js";
import {Utils} from "../../Source/Utils/Utils.js"
import * as assert from "node:assert";
import { Sanitizer } from "../../Source/View/Sanitizer/Sanitizer.js";
import { POSITIVE_CLUS, POSITIVE_NUMS } from "./Cases.js";

//This basically runs tests on every module
export class View extends Comet{
    constructor(){
        super();
        
        this.comet("sometest from FileView");
        this.run_tests();
    }
    run_tests(){
        console.log('running tests')
        this.fist();
        this.quantality();
        this.clusivity();
        this.positionality();
    }
    fist(){
        var fist = new Fist();
        var file='./tests/fist.file'
        fist.pound(file);
    }
    quantality(){
        this.comet('quantality()')
        this.comet(
            true,

        )
        var positives = POSITIVE_NUMS;

        var sanitizer = new Sanitizer()

        positives.forEach(expression => {
        
            if(sanitizer.sanitize(expression, 'tality')['matches'][0]==expression){
                this.comet(expression, "is true")
            }else{
                this.comet(expression, "is false")
            }
            //assert.equal(true, sanitizer.sanitize(expression, 'tality').includes(expression))
        });
    }
    clusivity(){
        this.comet('clusivity()')
        this.comet(
            true,
            
       )
        var positives = POSITIVE_CLUS;
        var sanitizer = new Sanitizer()
        positives.forEach(expression => {
        
            if(sanitizer.sanitize(expression, 'ivity')['matches'][0]==expression){
                this.comet(expression, "is true")
            }else{
                console.log(sanitizer.sanitize(expression, 'ivity'))
                this.comet(expression, "is false")
            }
        });
    }
    positionality(){
        this.comet('positionality()')
        this.comet(
            true,
            
        )
        var positives = POSITIVE_NUMS;
        var sanitizer = new Sanitizer()
        positives.forEach(expression => {
            if(sanitizer.sanitize(expression, 'ality')['matches'][0]==expression){
                this.comet(expression, "is true")
            }else{
                this.comet(expression, "is false")
            }
        });
        var negatives=[
            '1b+end', '2+mid',
        ]
    } 
}