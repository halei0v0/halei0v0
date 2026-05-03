// 本地番剧数据配置
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "凡人修仙传",
		status: "watching",
		rating: 9.6,
		cover: "/assets/anime/fanren.webp",
		description: "凡人的修仙历程~",
		episodes: "12 episodes",
		year: "2020",
		genre: ["动作", "修仙", "冒险", "奇幻"],
		studio: "A-1 Pictures",
		link: "https://www.bilibili.com/bangumi/media/md28223043",
		progress: 40,
		totalEpisodes: 164,
		startDate: "2022-07",
		endDate: "2022-09",
	},
	{
		title: "灵笼 第二季 ",
		status: "completed",
		rating: 9.9,
		cover: "/assets/anime/2.webp",
		description: "简介：数百年前，欲望催生了几乎灭绝人类的玛娜生态。人类瞬间沦为猎物，文明毁灭殆尽，末日中猜忌和恐惧拉开了人与人之间的距离。灾难当前，人们逐渐意识到：情感——这个被灯塔视为禁忌的存在，如今成为突破一切障碍、构建命运共同体的最强纽带。已被逼至绝境的幸存者们能否重夺未来？",
		episodes: "12 episodes",
		year: "2025-05-23",
		genre: ["热血", "战斗", "科幻"],
		studio: "Bilibili",
		link: "https://www.bilibili.com/bangumi/media/md21123554",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2025-05-30",
		endDate: "2025-10-10",
	},
	{
		title: "灵笼 第一季 ",
		status: "completed",
		rating: 9.8,
		cover: "/assets/anime/1.webp",
		description: "简介：不久的未来，人类的世界早已拥挤不堪，迈向星河、寻找新家园的行动迫在眉急。正当一切有条不紊的推进之时，月相异动，脚下的大地爆发了长达数十年、剧烈的地质变化，人类在这场浩劫中所剩无几。当天地逐渐恢复平静，人们从废墟和深渊中重新踏上了这片熟悉而又陌生的大地。习惯了主宰一切的我们是否还是这个世界的主人？",
		episodes: "12 episodes",
		year: "2019",
		genre: ["热血", "战斗", "科幻"],
		studio: "Bilibili",
		link: "https://www.bilibili.com/bangumi/media/md23432",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2020-07",
		endDate: "2020-09",
	},
];

export default localAnimeList;
