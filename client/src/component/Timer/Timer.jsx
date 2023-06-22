import {  useState, useEffect } from "react";

export default function Timer() {
 const [timer, setTimer] = useState(30);
useEffect(() => {
    const interval = setInterval(() =>{
        setTimer((prev) => prev-1)
    }, 1000);
    // Membersihkan interval saat komponen Timer di-unmount
    return () => clearInterval(interval);

  },[]); // Tambahkan array kosong sebagai dependensi untuk menjalankan efek sekali saat komponen pertama kali di-mount
  return timer;

}
