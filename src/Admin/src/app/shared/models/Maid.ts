export enum MaritalStatus {
    SINGLE = 'SINGLE',
    MARRIED = 'MARRIED',
    WIDOWED = 'WIDOWED',
}

export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER'
}

export class Maid {

    public firstName: string;
    public lastName: string;
    public userName: string;
    public email: string;
    public phone: string;
    public password: string;
    public imgUrl: string;
    public aadharCardNo: string;
    public salary: number;
    public _isActive: boolean;
    public dateCreated: Date;
    public maritalStatus: MaritalStatus;
    public gender: Gender;
    //public Address address;
    // public List<Salary> salaryList; // HELPER METHOD
    // public Subscription subscription;
    // public Feedback feedback;
}