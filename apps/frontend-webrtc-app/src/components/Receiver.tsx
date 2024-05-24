import React,{ useEffect, useRef } from "react"
import Video from "./Video.js";


export const Receiver = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:3012');
        socket.onopen = () => {
            socket.send(JSON.stringify({
                type: 'receiver'
            }));
        }
        startReceiving(socket);
    }, []);

    function startReceiving(socket: WebSocket) {
        const video = document.createElement('video');
        document.body.appendChild(video);
        video.muted = true;

        const pc = new RTCPeerConnection();
        pc.ontrack = (event) => {
            console.log(event);
            videoRef.current!.srcObject =  new MediaStream([event.track]);
            videoRef.current!.muted = true;
            videoRef.current!.play();
        }

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'createOffer') {
                pc.setRemoteDescription(message.sdp).then(() => {
                    pc.createAnswer().then((answer) => {
                        pc.setLocalDescription(answer);
                        socket.send(JSON.stringify({
                            type: 'createAnswer',
                            sdp: answer
                        }));
                    });
                });
            } else if (message.type === 'iceCandidate') {
                pc.addIceCandidate(message.candidate);
            }
        }
    }

    return  (
        <div className="w-full max-h-screen flex flex-col justify-center items-center my-2">
            <Video videoRef={videoRef} />
        </div>
    )
}