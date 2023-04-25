import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    return (
        <>
            <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" />
            <TwitterFollowCard userName="martin" name="Martín Lobos" />
            <TwitterFollowCard userName="luks" name="Lucas Diaz" />
        </>
    )
}
