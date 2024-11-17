const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export async function updateUserToAdmin({
    id_usuario
}: { id_usuario:number }) {
    await fetch(`${apiURL}/usuarios/${id_usuario}/promover`, {
        method: 'PUT',
        headers: {
            'X-API-Key' : apiKey,
            'ngrok-skip-browser-warning': 'any value',
            'Content-Type': 'application/json',
        }
    })
}