export interface Item
{
    id: number;
    parentid?: number;
    name: string; 
}

export interface ItemList extends Item {
    children: Item[]; 
}
