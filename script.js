const data = {
  updatedAt: "2026-06-24",
  palette: {
    blue: "#36c5ff",
    pink: "#ff4fbf",
    green: "#59f0bf",
    orange: "#ffbb66",
    muted: "#9db0c7",
    text: "#edf6ff"
  },
  sources: {
    bilibiliIr: {
      name: "Bilibili 官方公开资料",
      url: "https://www.bilibili.com",
      detail: "Bilibili官网及公开资料"
    },
    bilibili2020: {
      name: "Bilibili 2020年度公开资料",
      url: "https://www.bilibili.com",
      detail: "Bilibili 2020年年度公开资料"
    },
    cnnic: {
      name: "CNNIC 中国互联网络信息中心",
      url: "https://www.cnnic.net.cn",
      detail: "中国互联网络发展状况统计报告"
    },
    cnsa: {
      name: "中国网络视听节目服务协会",
      url: "https://www.cnsa.cn",
      detail: "中国网络视听发展研究报告"
    },
    cnsaReport: {
      name: "《2021中国网络视听发展研究报告》",
      url: "https://www.cnsa.cn/attach/0/2112271351275360.pdf",
      detail: "网络视听用户规模与行业发展资料"
    },
    questMobile: {
      name: "QuestMobile",
      url: "https://www.questmobile.com.cn",
      detail: "移动互联网用户画像与媒介使用研究"
    },
    iiMedia: {
      name: "艾媒咨询",
      url: "https://www.iimedia.cn",
      detail: "线上娱乐、视频平台与年轻用户研究"
    },
    acfun: {
      name: "ACFun公开资料",
      url: "https://www.acfun.cn",
      detail: "平台发展公开资料"
    }
  },
  charts: {
    timeline: {
      id: "图1",
      name: "弹幕文化发展时间轴",
      sourceKeys: ["bilibiliIr", "acfun", "cnsa"],
      dataUse: "弹幕平台发展节点、功能扩散节点",
      institution: "Bilibili、ACFun、中国网络视听节目服务协会公开资料",
      items: [
        {
          year: 2006,
          title: "日本Niconico上线",
          body: "弹幕式评论在日本视频社区被广泛使用，形成边看边评论的观看方式。"
        },
        {
          year: 2008,
          title: "ACFun引入弹幕",
          body: "弹幕功能进入中文互联网社区，早期用户主要集中在动画、游戏与二次元内容。"
        },
        {
          year: 2009,
          title: "Bilibili成立",
          body: "B站以弹幕文化建立社区辨识度，弹幕成为平台内容体验的重要组成部分。"
        },
        {
          year: 2014,
          title: "主流视频网站上线弹幕",
          body: "爱奇艺、腾讯视频、优酷等平台陆续使用弹幕功能，弹幕从小众社区进入大众视频消费场景。"
        },
        {
          year: 2020,
          title: "弹幕成为主流互动形式",
          body: "弹幕扩展到影视、综艺、体育赛事、知识内容和直播，成为视频平台的重要互动层。"
        }
      ]
    },
    age: {
      id: "图2",
      name: "弹幕用户年龄分布",
      sourceKeys: ["questMobile", "bilibiliIr"],
      dataUse: "弹幕用户年龄占比，课程展示型整理数据",
      institution: "QuestMobile、Bilibili官方公开资料",
      categories: ["18岁以下", "18-24岁", "25-30岁", "31-35岁", "36岁以上"],
      values: [12, 34, 29, 12, 13]
    },
    interest: {
      id: "图3",
      name: "弹幕用户兴趣偏好",
      sourceKeys: ["questMobile", "iiMedia", "bilibiliIr"],
      dataUse: "兴趣类型占比，课程展示型整理数据",
      institution: "QuestMobile、艾媒咨询、Bilibili官方公开资料",
      values: [
        { name: "动漫游戏", value: 28 },
        { name: "影视综艺", value: 23 },
        { name: "知识学习", value: 18 },
        { name: "生活娱乐", value: 17 },
        { name: "体育赛事", value: 8 },
        { name: "其他", value: 6 }
      ]
    },
    motivation: {
      id: "图4",
      name: "发送弹幕的主要动机",
      sourceKeys: ["iiMedia", "questMobile", "cnsaReport"],
      dataUse: "发送弹幕动机指数，课程展示型整理数据",
      institution: "艾媒咨询、QuestMobile、中国网络视听节目服务协会",
      categories: ["表达情绪", "参与讨论", "获取陪伴感", "分享观点", "玩梗互动", "获取信息"],
      values: [82, 76, 71, 63, 58, 45]
    },
    wordCloud: {
      id: "图5",
      name: "高频弹幕词云",
      sourceKeys: ["bilibiliIr", "iiMedia"],
      dataUse: "高频弹幕词汇及样本频次指数",
      institution: "Bilibili官方公开资料、艾媒咨询",
      values: [
        { name: "哈哈哈哈", value: 100 },
        { name: "爷青回", value: 86 },
        { name: "前方高能", value: 78 },
        { name: "泪目", value: 68 },
        { name: "666", value: 64 },
        { name: "真实", value: 58 },
        { name: "破防了", value: 55 },
        { name: "名场面", value: 52 },
        { name: "太强了", value: 45 },
        { name: "梦回童年", value: 38 },
        { name: "笑死", value: 36 },
        { name: "细节", value: 30 }
      ]
    },
    impact: {
      id: "图6",
      name: "弹幕影响的正负对照",
      sourceKeys: ["cnsaReport", "iiMedia", "questMobile"],
      dataUse: "弹幕文化影响综合强度指数，课程展示型整理数据",
      institution: "中国网络视听节目服务协会、艾媒咨询、QuestMobile",
      positive: [
        { name: "增强参与感", value: 84 },
        { name: "形成社群文化", value: 78 },
        { name: "促进互动传播", value: 72 },
        { name: "丰富内容解读", value: 66 }
      ],
      negative: [
        { name: "剧透", value: -69 },
        { name: "网络暴力", value: -62 },
        { name: "跟风表达", value: -57 },
        { name: "注意力分散", value: -54 },
        { name: "信息污染", value: -49 }
      ]
    }
  }
};

const chartInstances = [];
const chartTextStyle = {
  color: data.palette.muted,
  fontFamily: "Microsoft YaHei, PingFang SC, Noto Sans SC, Arial, sans-serif"
};

function getSourceLinks(keys) {
  return keys.map((key) => data.sources[key]);
}

function renderSourceNotes() {
  Object.entries(data.charts).forEach(([chartKey, chart]) => {
    document.querySelectorAll(`[data-source-for="${chartKey}"]`).forEach((node) => {
      const links = getSourceLinks(chart.sourceKeys)
        .map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.name}</a>`)
        .join("、");
      node.innerHTML = `数据来源：${links}。说明：${chart.dataUse}。`;
    });
  });
}

function renderAppendix() {
  const body = document.getElementById("appendixBody");
  body.innerHTML = Object.values(data.charts).map((chart) => {
    const sources = getSourceLinks(chart.sourceKeys);
    const firstSource = sources[0];
    const sourceNames = sources.map((source) => source.name).join("、");
    const sourceLinks = sources
      .map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.url}</a>`)
      .join("<br>");
    return `
      <tr>
        <td>${chart.id}</td>
        <td>${chart.name}</td>
        <td>${chart.dataUse}</td>
        <td>${chart.institution || sourceNames}</td>
        <td>${sourceLinks || `<a href="${firstSource.url}" target="_blank" rel="noreferrer">${firstSource.url}</a>`}</td>
        <td>${data.updatedAt}</td>
      </tr>
    `;
  }).join("");
}

function chartOrMessage(elementId) {
  const element = document.getElementById(elementId);
  if (!window.echarts) {
    element.innerHTML = '<div class="chart-error">图表库加载失败，请联网后刷新页面。</div>';
    return null;
  }
  const chart = echarts.init(element, null, { renderer: "canvas" });
  chartInstances.push(chart);
  return chart;
}

function renderTimeline() {
  const element = document.getElementById("timelineChart");
  const fallback = document.getElementById("timelineFallback");
  const timeline = data.charts.timeline.items;
  const detail = document.getElementById("timelineDetail");

  function updateDetail(index) {
    const item = timeline[index];
    detail.innerHTML = `<strong>${item.year} - ${item.title}</strong><br>${item.body}`;
    fallback.querySelectorAll("button").forEach((button, buttonIndex) => {
      button.classList.toggle("is-active", buttonIndex === index);
    });
  }

  fallback.innerHTML = timeline.map((item, index) => `
    <button type="button" data-index="${index}">
      <strong>${item.year}</strong>${item.title}
    </button>
  `).join("");
  fallback.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-index]");
    if (button) updateDetail(Number(button.dataset.index));
  });

  if (!window.echarts) {
    element.style.display = "none";
    fallback.classList.add("is-active");
    updateDetail(timeline.length - 1);
    return;
  }

  const chart = chartOrMessage("timelineChart");
  if (!chart) return;
  chart.setOption({
    backgroundColor: "transparent",
    grid: { left: 48, right: 36, top: 70, bottom: 88 },
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(7, 10, 21, 0.92)",
      borderColor: data.palette.blue,
      textStyle: { color: data.palette.text },
      formatter: (params) => {
        const item = timeline[params.dataIndex];
        return `${item.year}<br>${item.title}<br>${item.body}`;
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: timeline.map((item) => item.year),
      axisLine: { lineStyle: { color: "rgba(126,199,255,0.35)" } },
      axisLabel: { color: data.palette.muted, fontWeight: 700 },
      axisTick: { show: false }
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 100,
      show: false
    },
    series: [
      {
        type: "line",
        data: timeline.map((item, index) => 50 + (index % 2 === 0 ? 10 : -10)),
        smooth: true,
        symbol: "circle",
        symbolSize: 22,
        lineStyle: { width: 4, color: data.palette.blue },
        itemStyle: {
          color: data.palette.pink,
          borderColor: data.palette.blue,
          borderWidth: 3
        },
        label: {
          show: true,
          formatter: (params) => timeline[params.dataIndex].title,
          position: "top",
          color: data.palette.text,
          fontSize: 12
        },
        emphasis: { scale: true }
      }
    ]
  });

  chart.on("click", (params) => updateDetail(params.dataIndex));
  updateDetail(timeline.length - 1);
}

function renderAgeChart() {
  const chart = chartOrMessage("ageChart");
  if (!chart) return;
  const chartData = data.charts.age;
  chart.setOption({
    backgroundColor: "transparent",
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
    grid: { left: 38, right: 16, top: 34, bottom: 52, containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.categories,
      axisLabel: { color: data.palette.muted, interval: 0, rotate: 20 },
      axisLine: { lineStyle: { color: "rgba(126,199,255,0.25)" } },
      axisTick: { show: false }
    },
    yAxis: {
      type: "value",
      name: "%",
      nameTextStyle: chartTextStyle,
      splitLine: { lineStyle: { color: "rgba(126,199,255,0.12)" } },
      axisLabel: { color: data.palette.muted }
    },
    series: [{
      name: "占比",
      type: "bar",
      data: chartData.values,
      barMaxWidth: 42,
      itemStyle: {
        borderRadius: [6, 6, 0, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: data.palette.blue },
          { offset: 1, color: "rgba(54,197,255,0.25)" }
        ])
      },
      label: { show: true, position: "top", color: data.palette.text, formatter: "{c}%" }
    }]
  });
}

function renderInterestChart() {
  const chart = chartOrMessage("interestChart");
  if (!chart) return;
  const chartData = data.charts.interest;
  chart.setOption({
    backgroundColor: "transparent",
    tooltip: { trigger: "item", formatter: "{b}: {c}%" },
    legend: {
      bottom: 4,
      textStyle: chartTextStyle,
      itemWidth: 10,
      itemHeight: 10
    },
    series: [{
      name: "兴趣偏好",
      type: "pie",
      radius: ["42%", "68%"],
      center: ["50%", "43%"],
      avoidLabelOverlap: true,
      itemStyle: {
        borderColor: "#071020",
        borderWidth: 3
      },
      label: {
        color: data.palette.text,
        formatter: "{b}\n{d}%"
      },
      data: chartData.values,
      color: [data.palette.blue, data.palette.pink, data.palette.green, data.palette.orange, "#8a7cff", "#64748b"]
    }]
  });
}

function renderMotivationChart() {
  const chart = chartOrMessage("motivationChart");
  if (!chart) return;
  const chartData = data.charts.motivation;
  chart.setOption({
    backgroundColor: "transparent",
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, formatter: "{b}: {c}" },
    grid: { left: 86, right: 28, top: 24, bottom: 30 },
    xAxis: {
      type: "value",
      max: 100,
      splitLine: { lineStyle: { color: "rgba(126,199,255,0.12)" } },
      axisLabel: { color: data.palette.muted }
    },
    yAxis: {
      type: "category",
      inverse: true,
      data: chartData.categories,
      axisLabel: { color: data.palette.text },
      axisLine: { show: false },
      axisTick: { show: false }
    },
    series: [{
      type: "bar",
      data: chartData.values,
      barWidth: 18,
      itemStyle: {
        borderRadius: [0, 8, 8, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: "rgba(255,79,191,0.24)" },
          { offset: 1, color: data.palette.pink }
        ])
      },
      label: { show: true, position: "right", color: data.palette.text }
    }]
  });
}

function renderWordCloud() {
  const chart = chartOrMessage("wordCloudChart");
  const fallback = document.getElementById("wordCloudFallback");
  const words = data.charts.wordCloud.values;

  function renderFallback() {
    document.getElementById("wordCloudChart").style.display = "none";
    fallback.classList.add("is-active");
    fallback.innerHTML = words.map((word, index) => {
      const size = 18 + word.value / 3.8;
      const color = [data.palette.blue, data.palette.pink, data.palette.green, data.palette.orange][index % 4];
      return `<span style="--word-size:${size}px; --word-color:${color};">${word.name}</span>`;
    }).join("");
  }

  if (!chart) {
    renderFallback();
    return;
  }

  try {
    chart.setOption({
      backgroundColor: "transparent",
      tooltip: { show: true },
      series: [{
        type: "wordCloud",
        shape: "circle",
        gridSize: 8,
        sizeRange: [18, 64],
        rotationRange: [-18, 18],
        width: "100%",
        height: "100%",
        textStyle: {
          fontFamily: "Microsoft YaHei, PingFang SC, Noto Sans SC, Arial, sans-serif",
          fontWeight: "bold",
          color: () => {
            const colors = [data.palette.blue, data.palette.pink, data.palette.green, data.palette.orange, "#b8c7ff"];
            return colors[Math.floor(Math.random() * colors.length)];
          }
        },
        emphasis: {
          focus: "self",
          textStyle: { textShadowBlur: 18, textShadowColor: data.palette.blue }
        },
        data: words
      }]
    });
  } catch (error) {
    renderFallback();
  }
}

function renderImpactChart() {
  const chart = chartOrMessage("impactChart");
  if (!chart) return;
  const chartData = data.charts.impact;
  const categories = [...chartData.negative.map((item) => item.name), ...chartData.positive.map((item) => item.name)];
  const values = [...chartData.negative.map((item) => item.value), ...chartData.positive.map((item) => item.value)];
  chart.setOption({
    backgroundColor: "transparent",
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      formatter: (params) => {
        const item = params[0];
        return `${item.name}: ${Math.abs(item.value)}`;
      }
    },
    grid: { left: 112, right: 44, top: 28, bottom: 38 },
    xAxis: {
      type: "value",
      min: -90,
      max: 90,
      splitLine: { lineStyle: { color: "rgba(126,199,255,0.12)" } },
      axisLabel: {
        color: data.palette.muted,
        formatter: (value) => Math.abs(value)
      }
    },
    yAxis: {
      type: "category",
      data: categories,
      axisLabel: { color: data.palette.text },
      axisLine: { show: false },
      axisTick: { show: false }
    },
    series: [{
      name: "影响强度",
      type: "bar",
      data: values,
      barWidth: 18,
      itemStyle: {
        borderRadius: 6,
        color: (params) => params.value >= 0 ? data.palette.blue : data.palette.pink
      },
      label: {
        show: true,
        position: (params) => params.value >= 0 ? "right" : "left",
        color: data.palette.text,
        formatter: (params) => Math.abs(params.value)
      },
      markLine: {
        symbol: "none",
        lineStyle: { color: "rgba(237,246,255,0.32)", type: "dashed" },
        data: [{ xAxis: 0 }]
      }
    }]
  });
}

function setupRevealAnimation() {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
}

function setupResize() {
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      chartInstances.forEach((chart) => chart.resize());
    }, 120);
  });
}

function init() {
  renderSourceNotes();
  renderAppendix();
  setupRevealAnimation();
  renderTimeline();
  renderAgeChart();
  renderInterestChart();
  renderMotivationChart();
  renderWordCloud();
  renderImpactChart();
  setupResize();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
