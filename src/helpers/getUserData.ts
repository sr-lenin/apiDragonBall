const usersURL = "https://dragonball-api.com/api/characters?race=Saiyan&affiliation=Z fighter";

export const getUserData = async ()=>{
    const data = await fetch(usersURL)
    const users = data.json()
    console.log(users)
    return users
}