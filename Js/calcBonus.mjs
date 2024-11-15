export function calcBonus(obj)
{
    return obj.map(item=>
        item - 10
    ).map(item => Math.floor(item/2))

}
