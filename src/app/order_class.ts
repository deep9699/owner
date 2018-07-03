export class order
{
    constructor(
        public id:number,
        public amount:number,
        public fk_email_id:string,
        public fk_cat_id:number,
        public fk_p_id:number,
        public date:string,
        public status:number
    )
    {}
};
