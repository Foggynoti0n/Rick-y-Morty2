
let myFavorites=[];

function postFav(req,res){

    const {character}= req.body

    myFavorites.push(character);

    res.status(200).json(myFavorites);

}

function deleteFav(req, res){

    const {id}= req.params;

    const deleted= myFavorites.filter((char)=> char.id !== Number(id))
   
    myFavorites= deleted;

    res.status(200).json(myFavorites);
}

module.exports={
    postFav,
    deleteFav
}