export class category_product
{
    constructor(
        public c_id:number,
        public c_name:string,
        public p_id:number,
        public p_name:string,
        public p_price:number,
        public p_qty:number,
        public p_mfg:string,
        public p_img:string,
        public p_color:string,
        public fk_cat_id:number,
        public p_desc:string){

    }
}