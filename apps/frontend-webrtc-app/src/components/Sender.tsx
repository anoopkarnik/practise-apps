import React,{ useEffect, useRef, useState } from "react"
import Video from "./Video.js";

export const Sender = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        let websocketServer;
        websocketServer = import.meta.env.VITE_WS_URL + ":" +import.meta.env.VITE_PORT ;
        if (!import.meta.env.VITE_WS_URL) {
            websocketServer  = 'ws://backend-webrtc.practise.bsamaritan.com'
        }
        const socket = new WebSocket(websocketServer);
        setSocket(socket);
        socket.onopen = () => {
            socket.send(JSON.stringify({
                type: 'sender'
            }));
        }
    }, []);

    const initiateConn = async () => {

        if (!socket) {
            alert("Socket not found");
            return;
        }

        socket.onmessage = async (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'createAnswer') {
                await pc.setRemoteDescription(message.sdp);
            } else if (message.type === 'iceCandidate') {
                pc.addIceCandidate(message.candidate);
            }
        }

        const pc = new RTCPeerConnection();
        pc.onicecandidate = (event) => {
            if (event.candidate) {
                socket?.send(JSON.stringify({
                    type: 'iceCandidate',
                    candidate: event.candidate
                }));
            }
        }

        pc.onnegotiationneeded = async () => {
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            socket?.send(JSON.stringify({
                type: 'createOffer',
                sdp: pc.localDescription
            }));
        }
            
        getCameraStreamAndSend(pc);
    }

    const getCameraStreamAndSend = (pc: RTCPeerConnection) => {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            videoRef.current!.srcObject = stream;

            videoRef.current!.play();
            stream.getTracks().forEach((track) => {
                pc?.addTrack(track);
            });
        });
    }

    return <div className="w-full max-h-screen flex flex-col justify-center items-center gap-4 my-2">
        <Video videoRef={videoRef} />
        <button className="bg-gradient-to-br from-black to-yellow-600 hover:border-2 hover:border-black  text-white rounded-2xl p-4 text-2xl shadow-lg shadow-black" onClick={initiateConn}> Start Video Call </button>
    </div>
}