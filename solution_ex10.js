console.log("--- MINH HỌA CƠ CHẾ HOISTING TRONG JAVASCRIPT ---");

console.log("\n1. Function Declaration:");
try {
    console.log(turnOnAirConditioner()); 
} catch (error) {
    console.log("Lỗi:", error.message);
}

function turnOnAirConditioner() {
    return "[Thành công] Điều hòa đã bật (Function Declaration).";
}

console.log("\n2. Function Expression:");
try {
    console.log(turnOffLight()); 
} catch (error) {
    console.log("[Lỗi Bắt Được] Function Expression:", error.message);
}

const turnOffLight = function() {
    return "[Thành công] Đèn đã tắt (Function Expression).";
};

console.log("\n3. Arrow Function:");
try {
    console.log(setTemperature()); 
} catch (error) {
    console.log("[Lỗi Bắt Được] Arrow Function:", error.message);
}

const setTemperature = () => {
    return "[Thành công] Nhiệt độ đã đặt 24 độ (Arrow Function).";
};
