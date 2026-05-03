// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	电脑配件: [
		{
			name: "华硕 RTX 4070Ti TUF",
			image: "/images/device/GPU.png",
			specs: "GPU",
			description: "华硕 RTX 4070Ti TUF Gaming 12Gb超频版",
			link: "https://www.asus.com.cn/motherboards-components/graphics-cards/tuf-gaming/tuf-rtx4070ti-o12g-white-gaming/",
		},
		{
			name: "华硕 GT 502 Gaming",
			image: "/images/device/华硕GT502.webp",
			specs: "CPU",
			description:
				"华硕 GT 502 TUF Gaming机箱",
			link: "https://www.asus.com.cn/motherboards-components/cases/tuf-gaming/tuf-gaming-gt502/",
		},
		{
			name: "天选 850W",
			image: "/images/device/TX850W.png",
			specs: "电源",
			description:
				"华硕 天选 850W ATX3.0",
			link: "https://www.asus.com.cn/motherboards-components/power-supply-units/tx-gaming/tuf-gaming-850g-tx/",
		},
		{
			name: "华硕 ROG 吹雪 B760-A",
			image: "/images/device/B760-A.jpg",
			specs: "主板",
			description:
				"华硕 吹雪 850W ATX3.0",
			link: "https://rog.asus.com.cn/motherboards/rog-strix/rog-strix-b760-a-gaming-wifi/",
		},
		{
			name: "intel i5 13600KF",
			image: "/images/device/CPU.jpeg",
			specs: "CPU",
			description:
				"intel 13代 i5 13600KF",
			link: "https://www.intel.cn/content/www/cn/zh/products/sku/230494/intel-core-i513600kf-processor-24m-cache-up-to-5-10-ghz/specifications.html",
		},
		{
			name: "金士顿 Fury BEAST DDR5",
			image: "/images/device/内存.jpeg",
			specs: "内存",
			description:
				"Kingston FURY™ Beast DDR5 6000MT/s 内存为下一代游戏平台提供了卓越的速度、容量和可靠性。通过增强功能，如片内 ECC 以提升稳定性，以及双 32 位子通道以提高效率，让您的机器性能更上一层楼。Kingston FURY Beast DDR5 支持 Intel® XMP 3.0 和 AMD EXPO™ 的超频规格，并提供可自定义的速度和时序配置文件，助您充分挖掘游戏体验、实现 4K+ 高清直播，或加速动画和 3D 渲染项目。",
			link: "https://www.kingston.com.cn/cn/memory/gaming/kingston-fury-beast-ddr5-memory",
		},
		{
			name: "金士顿 KC3000 2T",
			image: "/images/device/KC3000.jpeg",
			specs: "硬盘",
			description:
				"PCIe 4.0 NVMe M.2 7,000MB/秒读取速度、3,900MB/秒写入速度",
			link: "https://www.kingston.com.cn/cn/ssd/kc3000-nvme-m2-solid-state-drive",
		},
		{
			name: "利民FROZEN WARFRAME 360 BLACK",
			image: "/images/device/水冷.jpeg",
			specs: "水冷",
			description:
				"CPU散热器，一体式水冷散热器散热方式	水冷|适用范围	Intel：LGA 115X/1200/1700/1851/2011/2066产品尺寸	397×120×27mm其它特点	屏幕参数：2.4寸IPS显示屏，320*240分辨率，450nits峰值亮度 ，24BIT真彩色风扇数量	1个风扇尺寸	120×120×25mm轴承类型	流体动态轴承（FDB）最高转数	2000RPM转数描述	2000±10%RPM最大风量	70.84CFM风压	2.63mmaq噪音	≤29.8dB端子接口	4PIN PWM+3PIN ARGB水冷排类型	360mm冷排冷头尺寸	69.2×69.2×60mm",
			link: "https://detail.zol.com.cn/cooling_product/index2111867.shtml",
		},
	],
};
