const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export async function updateAdminToCommonUser({
    id_usuario
}: { id_usuario:number }) {
    await fetch(`${apiURL}/admin/${id_usuario}/remover-admin`, {
        method: 'PUT',
        headers: {
            'X-API-Key' : apiKey,
            'ngrok-skip-browser-warning': 'any value',
            'Content-Type': 'application/json',
        }
    })
}