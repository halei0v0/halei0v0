// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?s=48&v=4",
		desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
		
	},
	{
		id: 2,
		title: "Mizuki Docs",
		imgurl:
			"http://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg",
		desc: "Mizuki User Manual",
		siteurl: "https://docs.mizuki.mysqil.com",
		tags: ["Docs"],
	},
	{
		id: 3,
		title: "halei0v0's blog",
		imgurl:
			"https://avatars.githubusercontent.com/u/206404910?v=4",
		desc: "This  blog ornered by halei, sharing some front-end technology and life bits.",
		siteurl: "https://halei0v0.github.io/blog",
		tags: ["Blog"],
	},
	{
		id: 4,
		title: "THW’s Blog",
		imgurl:
			"https://image.tianhw.top/avatar.webp",
		desc: "前途似海，来日方长",
		siteurl: "https://blog.tianhw.top",
		tags: ["Blog"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
