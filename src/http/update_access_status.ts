const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export async function updateAccessStatus({ id_usuario, status_acesso }: { id_usuario: number, status_acesso: boolean }) {
    await fetch(`${apiURL}/usuarios/${id_usuario}/alterar_status_acesso`, {
        method: 'PUT',
        headers: {
            'X-API-Key' : apiKey,
            'ngrok-skip-browser-warning': 'any value',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status_acesso })
    })
}