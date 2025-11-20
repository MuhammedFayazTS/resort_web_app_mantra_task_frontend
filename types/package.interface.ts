export interface PackageItem {
    _id: string;
    title: string;
    description: string;
    price?: {
        adult: number;
        child: number;
    }
}