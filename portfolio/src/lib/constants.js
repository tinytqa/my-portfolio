export const PERSONAL_INFO = {
  name: "Quỳnh Anh",
  fullName: "Trần Quỳnh Anh",
  role: "Fresher Business Analyst cum QA",
  status: "Open to BA / Tester roles",
  location: "Cầu Giấy, Hà Nội",
  // Empty values are hidden on the page
  contact: {
    email: "tranquynhanh28032016@gmail.com",
    phone: "0902 148 134",
    linkedin: "",
    github: "https://github.com/tinytqa",
    cv: "/cv-tran-quynh-anh.pdf",
  },
};

// Strava: paste the iframe src URLs from your profile's embed code into `widgets`.
// Empty widgets → only the "Xem trên Strava" link is shown.
export const STRAVA = {
  profile: "https://www.strava.com/athletes/196322977",
  widgets: [
    // { title: "Hoạt động gần đây", src: "https://www.strava.com/athletes/196322977/latest-rides/<token>", height: 454 },
    // { title: "Tóm tắt tuần", src: "https://www.strava.com/athletes/196322977/activity-summary/<token>", height: 160 },
  ],
};

// Words I'd use for myself (the "just for fun" sticker wall). Group titles live in ui-strings.js → personality.
export const PERSONALITY = [
  {
    id: "work",
    words: [
      { emoji: "🤔", label: "Hay hỏi “tại sao”" },
      { emoji: "✅", label: "Có trách nhiệm" },
      { emoji: "🐢", label: "Kiên trì" },
      { emoji: "🔍", label: "Tỉ mỉ" },
      { emoji: "🐝", label: "Chăm chỉ" },
    ],
  },
  {
    id: "life",
    words: [
      { emoji: "☀️", label: "Lạc quan" },
      { emoji: "⚡", label: "Năng động" },
      { emoji: "🎉", label: "Hướng ngoại" },
      { emoji: "😂", label: "Hài hước" },
      { emoji: "🐰", label: "Nhí nhảnh loi choi" },
      { emoji: "🔥", label: "Máu liều nhiều hơn máu sợ" },
      { emoji: "😈", label: "Quỷ nghịch ngợm" },
      { emoji: "🤏", label: "Tiny" },
    ],
  },
];

// Hobbies without a photo album — shown as chips under the gallery (icon = lucide name in LifeCard)
export const OTHER_HOBBIES = [
  { id: "cycling", label: "Đạp xe" },
  { id: "swimming", label: "Bơi lội" },
  { id: "jumprope", label: "Nhảy dây" },
];

// Books I've read. Cover images go in /public/books (leave `cover` empty to show a plain spine).
// Optional `quote`: a favourite line, kept in its original language.
// Add the English version of `takeaways` in content-en.js → BOOKS (same order).
export const BOOKS = [
  {
    title: "Atomic Habits — Thay đổi tí hon, hiệu quả bất ngờ",
    author: "James Clear",
    cover: "/books/atomic-habits.jpeg",
    takeaways: [
      "Chỉ cần hôm nay tốt hơn hôm qua 1%: những thay đổi nhỏ cộng dồn lại sẽ tạo ra khác biệt lớn.",
      "Gắn thói quen mới vào thói quen sẵn có, ví dụ ăn cơm xong thì làm ngay thói quen mới.",
      "Dùng cơ chế thưởng phạt để giữ thói quen tốt và bỏ thói quen xấu.",
    ],
  },
  {
    title: "Được học (Educated)",
    author: "Tara Westover",
    cover: "/books/duoc-hoc.jpg",
    quote:
      "I can stand in this wind, because I'm not trying to stand in it. The wind is just wind. You could withstand these gusts on the ground, so you can withstand them in the air. There is no difference. Except the difference you make in your head.",
    takeaways: [
      "Nhiều giới hạn chỉ nằm trong suy nghĩ của mình: khi thôi sợ hãi, việc khó cũng chỉ là việc mình vẫn làm được.",
      "Học tập không chỉ là kiến thức mà là quyền tự định hình con người mình.",
      "Dám đặt câu hỏi với cả những điều mình từng tin là đúng.",
    ],
  },
  {
    title: "Sao chúng ta lại ngủ (Why We Sleep)",
    author: "Matthew Walker",
    cover: "/books/sao-chung-ta-lai-ngu.webp",
    takeaways: [
      "Phải ngủ đủ: giấc ngủ ảnh hưởng trực tiếp đến trí nhớ, hệ miễn dịch và tâm trạng.",
      "Không có chuyện ngủ bù: thiếu ngủ hôm nay không lấy lại được, nên phải ngủ đủ mỗi ngày.",
      "Hiểu cơ chế của giấc ngủ: đồng hồ sinh học và các giai đoạn của một giấc ngủ.",
      "Nhận ra những thứ khiến mình mất ngủ: caffeine, ánh sáng màn hình, giờ giấc thất thường.",
      "Cách ngủ dễ hơn: đi ngủ và thức dậy đúng giờ, phòng ngủ tối và mát, hạn chế caffeine buổi chiều.",
    ],
  },
];

// Stories I read for fun — just a cover shelf, no lessons.
// English titles (where the book has one) go in content-en.js → FICTION_BOOKS (same order).
export const FICTION_BOOKS = [
  { title: "Cây cam ngọt của tôi", author: "José Mauro de Vasconcelos", cover: "/books/cay-cam-ngot-cua-toi.jpg" },
  { title: "Những kẻ âu lo", author: "Fredrik Backman", cover: "/books/nhung-ke-au-lo.webp" },
  { title: "Cho tôi xin một vé đi tuổi thơ", author: "Nguyễn Nhật Ánh", cover: "/books/cho-toi-xin-mot-ve-di-tuoi-tho.jpg" },
  { title: "Bảy bước tới mùa hè", author: "Nguyễn Nhật Ánh", cover: "/books/bay-buoc-toi-mua-he.jpg" },
  { title: "Chú bé rắc rối", author: "Nguyễn Nhật Ánh", cover: "/books/chu-be-rac-roi.jpg" },
  { title: "Lại thằng nhóc Emil!", author: "Astrid Lindgren", cover: "/books/lai-thang-nhoc-emil.jpg" },
  { title: "Emily Feather và Chiếc Gương Bí Ẩn", author: "Holly Webb", cover: "/books/emily-feather.jpg" },
  { title: "Hoàng Tử Bé", author: "Antoine de Saint-Exupéry", cover: "/books/hoang-tu-be.webp" },
];

export const HIGHLIGHTS = [
  { value: "1+ năm", label: "Thực tập BA kiêm QA/Tester" },
  { value: "3", label: "Công ty · 4 dự án thực tế" },
  { value: "3.7", label: "GPA · Đại học CMC" },
  { value: "Top 50", label: "Google AI Riser 2026" },
];

export const NAV_LINKS = [
  { label: "Kinh nghiệm", href: "/experience" },
  { label: "Năng lực", href: "/skills" },
  { label: "Dự án", href: "/projects" },
  { label: "Khám phá thêm", href: "/more" },
  { label: "Ngoài công việc", href: "/life" },
  { label: "Liên hệ", href: "/contact" },
];

export const EXPERIENCES = [
  {
    role: "Thực tập sinh BA kiêm Tester",
    company: "Hyperlogy",
    note: "Onsite tại ngân hàng BIDV",
    period: "05/2026 – 10/2026",
    projects: [
      {
        name: "Hệ thống eForm thông minh – BIDV",
        domain: "Ngân hàng",
        bullets: [
          { tag: "BA", text: "Làm việc onsite tại ngân hàng, trao đổi trực tiếp với khách hàng để làm rõ yêu cầu trong suốt quá trình phát triển." },
          { tag: "BA", text: "Tiếp nhận change request của khách hàng và cập nhật tương ứng vào tài liệu RSD, ứng dụng công cụ AI để tăng tốc viết tài liệu." },
          { tag: "BA", text: "Giải thích chi tiết yêu cầu và giải đáp thắc mắc cho đội dev, làm cầu nối giữa khách hàng và đội phát triển." },
          { tag: "Kiểm thử", text: "Viết test case dựa trên RSD và kiểm thử chức năng; phát hiện, báo lỗi cho dev sửa và kiểm tra lại sau khi sửa." },
          { tag: "API", text: "Kiểm thử API, đảm bảo dữ liệu đầu vào/đầu ra và logic nghiệp vụ đúng theo yêu cầu." },
        ],
        learnings: [
          {
            title: "Xử lý change request: hiểu mục đích trước khi đồng ý thay đổi",
            detail:
              "Làm onsite với ngân hàng, mình nhận ra một yêu cầu thay đổi nghe nhỏ có thể kéo theo cả tài liệu, test case lẫn tiến độ của dev. Vì vậy mình không ghi nhận nguyên văn rồi chuyển đi, mà đi qua 4 bước:",
            steps: [
              "Hỏi rõ mục đích nghiệp vụ đằng sau thay đổi: khách đang muốn giải quyết vấn đề gì, cho ai dùng.",
              "Từ mục đích đó, tư vấn phương án dễ dùng và thuận tiện hơn nếu có — nhiều khi đạt cùng mục tiêu mà thay đổi ít hơn.",
              "Trao đổi với dev về tính khả thi, effort và ảnh hưởng đến phần đã làm trước khi hứa với khách.",
              "Chỉ chốt khi phạm vi đã rõ, sau đó cập nhật RSD và test case liên quan để mọi bên dùng cùng một phiên bản.",
            ],
            outcome:
              "Cách làm này giúp mình tránh cam kết điều team không làm được, giảm làm lại cho dev, và khách tin tưởng hơn vì được tư vấn chứ không chỉ được ghi nhận yêu cầu.",
          },
        ],
        skills: ["Change request", "RSD", "Test case", "Functional testing", "API testing", "Bug report & re-test"],
      },
    ],
  },
  {
    role: "Thực tập sinh BA kiêm QA",
    company: "zen8labs Việt Nam",
    period: "11/2025 – 04/2026",
    // Lessons that apply to the whole internship, shown after the projects
    learnings: [
      {
        title: "Ứng dụng AI vào công việc BA — nhanh hơn nhưng không phó mặc",
        detail:
          "Tại zen8labs, mình được hướng dẫn cách đưa AI vào quy trình làm tài liệu một cách có kiểm soát:",
        steps: [
          "Cung cấp cho AI đủ ngữ cảnh: mục tiêu, yêu cầu đã thống nhất và template tài liệu chuẩn.",
          "Dùng AI để tạo bản nháp FRD, SRS, user guide và chuẩn hoá cấu trúc tài liệu.",
          "Tự review từng phần, đối chiếu với yêu cầu của khách và nghiệp vụ thực tế trước khi gửi đi.",
        ],
        outcome:
          "AI giúp mình rút ngắn thời gian soạn thảo, còn trách nhiệm về độ chính xác vẫn là của BA. Mình mang cách làm này sang dự án BIDV khi cập nhật RSD.",
      },
    ],
    training:
      "Hoàn thành khóa đào tạo BA theo chuẩn IIBA (BABOK® Guide) và khung ITTO của PMI; thực hành trên dự án Hệ thống Quản lý Tuyển dụng (ATS) với Elicitation Plan, Communication Plan, RACI Matrix, Traceability Matrix và mô hình BPMN kèm phân tích gap.",
    projects: [
      {
        name: "Hệ thống Kiểm duyệt Mã nguồn & Phân tích Sử dụng Mô hình AI – VTNet (Viettel)",
        domain: "Phần mềm doanh nghiệp",
        bullets: [
          { tag: "BA", text: "Thu thập, phân tích yêu cầu; trực tiếp soạn bộ tài liệu đầy đủ: FRD, SRS, bảng ước lượng nỗ lực và hướng dẫn sử dụng." },
          { tag: "BA", text: "Họp hàng tuần với khách hàng và đội dự án để cập nhật tiến độ, làm rõ tính năng, phản hồi và bổ sung yêu cầu mới vào tài liệu." },
          { tag: "QA", text: "Viết test case chi tiết và kiểm thử hệ thống trước khi bàn giao." },
          { tag: "CSDL", text: "Dùng truy vấn SQL đối soát dữ liệu, đảm bảo tính chính xác và toàn vẹn của dữ liệu." },
        ],
        learnings: [
          {
            title: "Viết tài liệu để khách đọc một lần là hiểu",
            detail:
              "Trước khi gửi FRD/SRS, mình đọc lại từ góc nhìn của khách hàng — người không ngồi cùng team và không biết những gì mình đã ngầm hiểu:",
            steps: [
              "Mô tả rõ ràng, cụ thể: mỗi chức năng ghi đủ ai thực hiện, khi nào, điều kiện gì và kết quả ra sao — không để câu nào có thể hiểu theo hai cách.",
              "Đặt mình vào vị trí khách để tìm chỗ mơ hồ: thuật ngữ chưa định nghĩa, trường hợp ngoại lệ chưa nói tới, con số chưa có đơn vị.",
              "Trình bày ngắn gọn, cô đọng: ưu tiên bảng, gạch đầu dòng và luồng từng bước thay vì đoạn văn dài.",
            ],
            outcome:
              "Khách hàng hiểu đúng ngay từ lần đọc đầu, không phải hỏi đi hỏi lại — buổi họp tuần dành để chốt yêu cầu thay vì giải thích lại tài liệu.",
          },
          {
            title: "Hiểu thật rõ luồng nghiệp vụ trước khi viết tài liệu và test case",
            detail:
              "Tài liệu và test case chỉ chính xác khi mình nắm được hệ thống vận hành thế nào từ đầu đến cuối: dữ liệu đi qua những bước nào, ai tác động ở bước nào và điều gì xảy ra khi có ngoại lệ. Khi chưa hiểu rõ, mình hỏi lại cho đến khi vẽ được luồng, rồi mới bắt tay vào viết — nhờ vậy test case bám sát nghiệp vụ thật và phát hiện được lỗi ở những chỗ chuyển tiếp giữa các bước.",
          },
          {
            title: "Tài liệu là thứ sống, cần được cập nhật có kiểm soát",
            detail:
              "Yêu cầu thay đổi sau mỗi buổi họp tuần với khách. Mình học cách ghi nhận phản hồi, cập nhật FRD/SRS ngay sau buổi họp và giữ cho tài liệu luôn khớp với những gì đã thống nhất, thay vì viết một lần rồi để đó.",
          },
        ],
        skills: ["FRD", "SRS", "Effort estimation", "User guide", "System testing", "SQL"],
      },
      {
        name: "Hệ thống Quản lý Kho hàng – PI Pharma",
        domain: "Quản lý kho",
        bullets: [
          { tag: "Kiểm thử", text: "Thiết kế test case theo phân quyền, bao phủ phiếu nhập/xuất kho, điều chuyển nội bộ, import dữ liệu và gom nhóm tồn kho." },
          { tag: "Kiểm thử", text: "Tập trung vào luồng nghiệp vụ phức tạp và ngoại lệ; phát hiện sớm nhiều lỗi logic quan trọng." },
          { tag: "CSDL", text: "Dùng truy vấn SQL đối soát dữ liệu, đảm bảo tính chính xác và toàn vẹn của dữ liệu hàng hóa." },
        ],
        learnings: [
          {
            title: "Lỗi nghiêm trọng thường nằm ở luồng nghiệp vụ, không phải ở giao diện",
            detail:
              "Với hệ thống kho có nhiều vai trò, mình chuyển sang thiết kế test case theo từng vai trò người dùng và từng luồng nhập/xuất/điều chuyển, đồng thời đối soát dữ liệu bằng SQL thay vì chỉ kiểm tra những gì hiển thị trên màn hình.",
          },
        ],
        skills: ["Permission-based testing", "Edge cases", "Manual testing", "SQL"],
      },
    ],
  },
  {
    role: "Thực tập sinh Business Analyst",
    company: "Trí Nghĩa (TNT)",
    note: "Công ty TNHH TM DV và Công nghệ Trí Nghĩa",
    period: "06/2025 – 10/2025",
    projects: [
      {
        name: "Hệ thống AI phân loại lốp xe – khách hàng ô tô tại Singapore",
        domain: "AI · Khách hàng quốc tế",
        bullets: [
          { tag: "Khảo sát", text: "Lập kế hoạch, chuẩn bị kịch bản và trực tiếp họp lấy yêu cầu với khách hàng Singapore." },
          { tag: "Giao tiếp", text: "Giải thích khái niệm AI/ML bằng ngôn ngữ kinh doanh, giúp khách hàng hình dung cách hệ thống hoạt động." },
          { tag: "Tài liệu", text: "Hỗ trợ viết BRD và SRS; giải thích yêu cầu của khách hàng cho đội lập trình và giải đáp thắc mắc về luồng nghiệp vụ." },
        ],
        learnings: [
          {
            title: "Khách hàng không cần hiểu AI, họ cần hiểu AI giúp gì cho họ",
            detail:
              "Làm việc với khách hàng Singapore, mình học cách giải thích hệ thống bằng ví dụ nghiệp vụ thay vì thuật ngữ kỹ thuật, và luôn chuẩn bị kịch bản câu hỏi trước mỗi buổi họp để không bỏ sót yêu cầu.",
          },
        ],
        skills: ["Elicitation", "Meeting scripts", "BRD", "SRS", "Tiếng Anh"],
      },
    ],
  },
];

export const TEACHING = {
  role: "Giáo viên Ngữ pháp & IELTS",
  center: "The IELTS Conqueror",
  period: "05/2023 – nay",
  intro:
    "Bắt đầu đi dạy từ cuối năm lớp 12 và gắn bó đến nay. Mình tự soạn giáo án và lộ trình học riêng cho từng lớp, dạy cả lớp nhóm lẫn 1 kèm 1 cho học sinh, sinh viên và người đi làm.",
  stats: [
    { value: "3+ năm", label: "Đứng lớp liên tục" },
    { value: "40", label: "Học viên đã dạy" },
    { value: "3.0 → 5.5", label: "Lớp IELTS phụ trách" },
    { value: "Nhóm & 1-1", label: "Hình thức dạy" },
  ],
  courses: [
    {
      name: "Ngữ pháp nền tảng",
      audience: "Học sinh lớp 5 – 12",
      detail: "Xây nền ngữ pháp vững chắc, hệ thống kiến thức theo từng cấp lớp.",
    },
    {
      name: "Ôn thi vào 10 & Đại học",
      audience: "Học sinh cuối cấp",
      detail: "Ôn tập trọng tâm theo cấu trúc đề thi, luyện dạng bài và chiến lược làm bài.",
    },
    {
      name: "IELTS 3.0 → 5.5",
      audience: "Học sinh, sinh viên, người đi làm",
      detail: "Lộ trình từ mất gốc đến band mục tiêu, luyện đủ 4 kỹ năng.",
    },
  ],
  // How teaching maps onto BA / Tester work
  transferable: [
    {
      teaching: "Tìm hiểu trình độ và mục tiêu của từng học viên",
      work: "Elicitation: khai thác nhu cầu thật của khách hàng",
    },
    {
      teaching: "Giải thích ngữ pháp phức tạp bằng ví dụ dễ hiểu",
      work: "Diễn giải yêu cầu cho dev và khách hàng không chuyên",
    },
    {
      teaching: "Tự soạn giáo án và lộ trình theo từng giai đoạn",
      work: "Lập kế hoạch, viết tài liệu có cấu trúc rõ ràng",
    },
    {
      teaching: "Chữa bài, chỉ ra lỗi sai và nguyên nhân gốc",
      work: "Phát hiện lỗi, viết bug report kèm nguyên nhân",
    },
    {
      teaching: "Dạy nhiều đối tượng, từ lớp 5 đến người đi làm",
      work: "Làm việc với nhiều stakeholder khác nhau",
    },
    {
      teaching: "Theo sát tiến bộ, điều chỉnh cách dạy khi cần",
      work: "Đón nhận change request và cập nhật kịp thời",
    },
  ],
};

export const EDUCATION = {
  school: "Đại học CMC",
  degree: "Cử nhân Công nghệ Thông tin",
  period: "10/2023 – nay",
  gpa: "3.7",
  gpa10: "8.64",
  credits: 130,
  duration: "3 năm",
  note: "Đã hoàn thành chương trình, đang chờ bằng",
  // Copy of score/score_record.pdf with date of birth and student ID removed
  transcript: "/score/bang-diem-tran-quynh-anh.pdf",
  whyTitle: "Vì sao mình chọn CMC",
  why: [
    { icon: "scholarship", title: "Học bổng 100%", text: "Nhận học bổng toàn phần 100% học phí cho cả 3 năm học." },
    { icon: "fast", title: "Hoàn thành trong 3 năm", text: "Chương trình rút gọn còn 3 năm để mình có thời gian đi thực tập và trải nghiệm môi trường làm việc thật từ sớm." },
  ],
  achievements: [
    { title: "Sinh viên Xuất sắc", detail: "Đạt danh hiệu qua các học kỳ" },
    { title: "Giải Khuyến khích", detail: "Cuộc thi Nghiên cứu khoa học sinh viên cấp trường" },
  ],
  // Grades from the transcript, picked for relevance to BA / Tester work
  keyCourses: [
    { name: "Công nghệ phần mềm", grade: "A+", score: "9.7" },
    { name: "Kiểm thử phần mềm", grade: "A+", score: "9.6" },
    { name: "Phân tích & thiết kế hệ thống", grade: "A+", score: "9.2" },
    { name: "Yêu cầu phần mềm", grade: "A", score: "8.6" },
    { name: "Quản lý dự án CNTT", grade: "A", score: "8.6" },
    { name: "Khoá luận tốt nghiệp", grade: "A", score: "8.7" },
  ],
  // Secondary entry, shown small at the bottom of the education card
  highSchool: {
    school: "THPT Yên Hòa",
    period: "2020 – 2023",
    gpa: "9.6",
    intro: "Trường THPT công lập thành lập năm 1960 tại Cầu Giấy, Hà Nội, thuộc nhóm trường không chuyên tốt nhất thủ đô và thường có tỷ lệ chọi vào lớp 10 cao nhất thành phố.",
    achievements: [
      { title: "Giải Khuyến khích Quốc gia", detail: "Cuộc thi Tin học văn phòng thế giới MOSWC" },
      { title: "Giải Nhất cấp Thành phố", detail: "Kỳ thi học sinh giỏi môn Lịch sử" },
      { title: "Phó Chủ tịch", detail: "Câu lạc bộ Sách Yên Hòa" },
    ],
  },
};

export const CERTIFICATIONS = [
  { name: "Top 50 dự án AI Riser Vietnam 2026", issuer: "Google for Developers", date: "10/2026", link: "/cert/ai-riser-top50.pdf" },
  { name: "Building LLM Applications with Prompt Engineering", issuer: "NVIDIA", date: "11/2025" },
  { name: "IELTS 7.0 (Academic)", issuer: "", date: "10/2022" },
  { name: "Microsoft Office Specialist: Word Master, Excel, PowerPoint Master", issuer: "Microsoft", date: "05/2022" },
];

export const CAPABILITIES = [
  {
    id: "ba",
    eyebrow: "Business Analysis",
    title: "Từ nhu cầu đến yêu cầu rõ ràng",
    summary:
      "Làm việc trực tiếp với khách hàng để hiểu đúng vấn đề, rồi chuyển thành tài liệu mà cả team dev và test đều dùng được.",
    skills: [
      { name: "Khai thác & làm rõ yêu cầu trực tiếp với khách hàng", evidence: ["BIDV (onsite)", "Viettel", "Khách hàng Singapore"] },
      { name: "Viết tài liệu BRD / SRS / FRD / RSD, user guide", evidence: ["BIDV", "Viettel", "TNT"] },
      { name: "Tiếp nhận change request, cập nhật tài liệu kịp thời", evidence: ["BIDV"] },
      { name: "Ước lượng nỗ lực (effort estimation)", evidence: ["Viettel"] },
      { name: "Cầu nối khách hàng – đội dev, giải đáp nghiệp vụ", evidence: ["BIDV", "TNT"] },
      { name: "BPMN, Gap Analysis, RACI, Traceability Matrix", evidence: ["Đào tạo BABOK®"] },
    ],
    tools: ["Jira", "Confluence", "Draw.io", "Excel", "Use Case", "UML / ERD", "Wireframe"],
  },
  {
    id: "qa",
    eyebrow: "Software Testing",
    title: "Đảm bảo sản phẩm chạy đúng yêu cầu",
    summary:
      "Kiểm thử dựa trên tài liệu yêu cầu, tập trung vào luồng nghiệp vụ phức tạp, phân quyền và các trường hợp ngoại lệ.",
    skills: [
      { name: "Thiết kế test case từ tài liệu yêu cầu (RSD)", evidence: ["BIDV"] },
      { name: "Test case theo phân quyền, luồng phức tạp & edge case", evidence: ["PI Pharma"] },
      { name: "Kiểm thử chức năng & hệ thống, báo lỗi, re-test", evidence: ["BIDV", "Viettel"] },
      { name: "Kiểm thử API: dữ liệu vào/ra và logic nghiệp vụ", evidence: ["BIDV"] },
      { name: "Đối soát dữ liệu bằng SQL", evidence: ["Viettel", "PI Pharma"] },
      { name: "Tự động hoá E2E & kiểm thử hiệu năng", evidence: ["Tự học: Cypress, JMeter, JUnit"] },
    ],
    tools: ["SQL", "Jira", "Cypress", "JMeter", "JUnit 5", "Git/GitHub"],
  },
];

// Supplementary skills shown under the two capability cards
export const SUPPORT_SKILLS = [
  {
    icon: "language",
    title: "Tiếng Anh",
    detail: "IELTS 7.0 · Đã họp lấy yêu cầu trực tiếp với khách hàng Singapore.",
  },
  {
    icon: "talk",
    title: "Giao tiếp & giải thích",
    detail: "Giải thích AI/ML bằng ngôn ngữ kinh doanh cho khách hàng; 3+ năm đứng lớp tiếng Anh.",
  },
  {
    icon: "process",
    title: "Quy trình",
    detail: "Agile/Scrum, SDLC, User Story & Acceptance Criteria.",
  },
];

// "Working with AI" — what I've distilled from using AI in day-to-day BA / QA work
export const AI_REVIEW = {
  eyebrow: "Làm việc cùng AI",
  title: "Dùng AI để làm nhanh, tự kiểm tra để làm đúng",
  intro:
    "Mình dùng AI hằng ngày để soạn RSD, FRD, SRS ở các dự án thực tập và xây cả một sản phẩm AI. Điều mình đúc kết được: AI rất giỏi tạo bản nháp, nhưng trách nhiệm về độ chính xác vẫn thuộc về người dùng nó.",
  workflow: [
    { step: "Đưa đúng ngữ cảnh", detail: "Mục tiêu, yêu cầu đã chốt, template và ràng buộc. Output kém thường bắt đầu từ input thiếu." },
    { step: "Để AI làm bản nháp", detail: "AI soạn cấu trúc và câu chữ; quyết định nghiệp vụ vẫn do mình." },
    { step: "Kiểm tra như kiểm thử", detail: "Đọc output với tư duy tìm lỗi, theo checklist bên cạnh." },
    { step: "Chịu trách nhiệm bản cuối", detail: "Sửa, bổ sung và đánh dấu chỗ cần xác nhận lại với khách hàng." },
  ],
  checks: [
    {
      title: "Có nguồn gốc không?",
      detail: "Mỗi yêu cầu AI viết ra phải truy được về điều khách đã nói hoặc tài liệu gốc. Không truy được nghĩa là AI tự suy diễn.",
    },
    {
      title: "Có đủ không?",
      detail: "AI thường chỉ viết luồng chính. Mình rà lại ngoại lệ, phân quyền và trường hợp biên — chỗ lỗi hay nằm nhất.",
    },
    {
      title: "Có nhất quán không?",
      detail: "Thuật ngữ, tên trường, con số phải khớp giữa các phần và với phiên bản tài liệu trước.",
    },
    {
      title: "Có kiểm thử được không?",
      detail: "Câu chung chung kiểu “hệ thống xử lý phù hợp” phải được viết lại thành điều kiện cụ thể, đo được.",
    },
    {
      title: "Có đúng bối cảnh không?",
      detail: "AI hay áp kiến thức phổ thông. Mình đối chiếu với nghiệp vụ thật của khách hàng và đặc thù ngành.",
    },
    {
      title: "Có an toàn không?",
      detail: "Không đưa dữ liệu nhạy cảm của khách hàng vào công cụ AI khi chưa được phép.",
    },
  ],
  principle:
    "Mình xem AI như một đồng nghiệp làm rất nhanh nhưng cần được review — và review output của AI chính là kiểm thử, chỉ khác là đối tượng kiểm thử là văn bản.",
};

export const BA_TRAINING = {
  org: "zen8labs Việt Nam",
  standard: "IIBA — BABOK® Guide",
  framework: "PMI — ITTO",
  practice: "Case mô phỏng: hệ thống tuyển dụng (ATS)",
  // The practice case, step by step: what I did and what came out of it
  case: {
    name: "Hệ thống Quản lý Tuyển dụng (ATS)",
    context:
      "Một công ty đang tuyển dụng hoàn toàn thủ công: CV gửi về email, 3 HR tự lưu vào folder riêng, chuyển cho trưởng ban qua Zalo, không có tiêu chí lọc chuẩn và không có deadline. Một vị trí có thể mất vài tuần mới đến được buổi phỏng vấn.",
    summary:
      "Nhiệm vụ của mình là phân tích quy trình hiện tại và chuẩn bị cho dự án xây dựng hệ thống ATS. Mình đi trọn một vòng BA: tìm nguyên nhân gốc, đề xuất phương án, phân vai stakeholder, khai thác yêu cầu và truy vết sang test case.",
    numbers: [
      { value: "6", label: "buổi khai thác yêu cầu" },
      { value: "20 → 15", label: "ghi chú thô → findings" },
      { value: "3", label: "quyết định được chốt" },
      { value: "3 → 11", label: "Business Need → Requirement" },
    ],
    steps: [
      {
        phase: "Đánh giá nhu cầu",
        title: "Tìm nguyên nhân gốc",
        did: "Viết Business Need Statement, hỏi 5 Whys và dùng Pareto để tách triệu chứng khỏi nguyên nhân.",
        result: "Nguyên nhân gốc không phải “HR làm chậm” mà là thiếu hệ thống dữ liệu tập trung và chưa chuẩn hoá cách phối hợp giữa các bên.",
      },
      {
        phase: "Đánh giá nhu cầu",
        title: "Kiểm chứng giả định, vẽ quy trình as-is",
        did: "Lập Assumptions Log, vẽ BPMN as-is theo cách mọi người thực sự làm và phân tích gap.",
        result: "Giả định “HR tự quyết CV có phù hợp hay không” bị bác bỏ: HR phải chờ trưởng phòng và chưa có tiêu chí chuẩn.",
      },
      {
        phase: "Đánh giá nhu cầu",
        title: "So sánh phương án",
        did: "Chấm điểm các option theo tiêu chí có trọng số, kèm ROI, thời gian hoàn vốn và ma trận rủi ro.",
        result: "Có phương án đề xuất và phương án dự phòng khi ngân sách bị cắt.",
      },
      {
        phase: "Lập kế hoạch",
        title: "Xác định stakeholder",
        did: "Lập Stakeholder Register, RACI Matrix và Communication Plan theo quyền lực và mức quan tâm.",
        result: "HR được xếp vào nhóm Manage Closely: tham gia hằng tuần và cùng thiết kế hệ thống.",
      },
      {
        phase: "Khai thác yêu cầu",
        title: "Khai thác và chốt yêu cầu",
        did: "Lên Elicitation Plan 6 buổi, từ phỏng vấn as-is đến hướng dẫn UAT; gắn nhãn ghi chú F/A/I/D/C, gửi biên bản trong 48h để stakeholder sign-off.",
        result: "Từ 20 ghi chú thô tổng hợp thành 15 findings, 3 quyết định và 3 điểm còn mở có người chịu trách nhiệm.",
      },
      {
        phase: "Quản lý thông tin",
        title: "Truy vết yêu cầu",
        did: "Lập Traceability Matrix nối mỗi requirement về business need và sang test case.",
        result: "3 Business Need → 11 Requirement → Test Case.",
      },
    ],
    deliverables: [
      "Business Need Statement",
      "Assumptions Log",
      "As-is BPMN & Gap Analysis",
      "Weighted Scoring & ROI",
      "Stakeholder Register",
      "RACI Matrix",
      "Communication Plan",
      "Elicitation Plan",
      "MoM & Sign-off",
      "Traceability Matrix",
    ],
  },
  // What I learned — the principles behind the practice case above
  learnings: [
    {
      phase: "Đánh giá nhu cầu",
      title: "Hiểu đúng vấn đề trước khi nghĩ đến giải pháp",
      detail:
        "“Chúng ta cần hệ thống mới” thường xuất hiện trước khi ai đó hiểu quy trình hiện tại. Mình học cách viết vấn đề thành một câu Problem + Goal + Metric có mốc thời gian, rồi hỏi “tại sao” đến khi chạm nguyên nhân gốc thay vì xử lý triệu chứng.",
      tags: ["Business Need Statement", "5 Whys", "Pareto"],
    },
    {
      phase: "Đánh giá nhu cầu",
      title: "Mọi kết luận đều cần bằng chứng",
      detail:
        "Mình tách rõ đâu là Fact, đâu là Assumption, đâu là Constraint, và với mỗi giả định phải ghi được cách kiểm chứng. Quy trình as-is phải vẽ theo cách người ta thực sự làm, vì thực tế thường lệch khỏi SOP.",
      tags: ["Assumptions Log", "As-is BPMN", "Gap Analysis"],
    },
    {
      phase: "Đánh giá nhu cầu",
      title: "Đề xuất để người khác ra quyết định được",
      detail:
        "Đưa một phương án duy nhất khiến sponsor không thấy mình đang được lựa chọn. Mình học cách so sánh nhiều option bằng tiêu chí có trọng số, kèm ROI, thời gian hoàn vốn và rủi ro để lãnh đạo có cơ sở phê duyệt.",
      tags: ["Feasibility", "Weighted Scoring", "ROI / Payback", "Risk L×I"],
    },
    {
      phase: "Lập kế hoạch",
      title: "Làm việc với đúng người, đúng cách, đúng lúc",
      detail:
        "Phân tích đúng nhưng vẫn bị reject nếu người có quyền quyết định không được tham gia từ đầu. Mình học cách xếp stakeholder theo quyền lực và mức quan tâm, và tìm hiểu vì sao họ có thể phản đối trước khi thiết kế giải pháp.",
      tags: ["Stakeholder Register", "RACI", "Communication Plan"],
    },
    {
      phase: "Khai thác yêu cầu",
      title: "Buổi họp tốt được quyết định từ trước khi họp",
      detail:
        "Mỗi buổi chỉ một mục tiêu, có output cam kết, có bộ câu hỏi chuẩn bị sẵn và tài liệu đọc trước dưới 30 phút. Câu hỏi về giải pháp được đưa vào parking lot để buổi họp không bị lan man.",
      tags: ["Elicitation Plan", "Question Guide", "Parking lot"],
    },
    {
      phase: "Khai thác yêu cầu",
      title: "Im lặng không có nghĩa là đồng ý",
      detail:
        "Ghi chú trong buổi được gắn nhãn Fact / Assumption / Issue / Decision / Constraint, biên bản gửi trong 48h, và stakeholder phải chọn Agree, Comment hoặc Reject. Chỉ bản đã được duyệt mới trở thành baseline.",
      tags: ["Tag F/A/I/D/C", "MoM", "Sign-off", "Baseline"],
    },
    {
      phase: "Quản lý thông tin",
      title: "Yêu cầu nào cũng phải truy được về nhu cầu",
      detail:
        "Mỗi requirement phải nối về một business need, và mỗi test case nối về một requirement. Requirement không truy về đâu là dấu hiệu scope creep. Đây cũng là chỗ vai trò BA và Tester của mình gặp nhau.",
      tags: ["Traceability Matrix", "Version Control"],
    },
  ],
};

export const FEATURED_PROJECT = {
  name: "IELTS Master AI",
  award: "Top 50 dự án · Google AI Riser Vietnam 2026",
  tagline: "Nền tảng luyện thi IELTS cá nhân hoá với AI chấm Writing & Speaking theo band descriptors.",
  problem:
    "Từ 3 năm đứng lớp, mình thấy học viên ôn IELTS thường thiếu phản hồi chi tiết sau mỗi bài viết, lặp lại cùng một lỗi sai và không có lộ trình phù hợp với trình độ.",
  journey: [
    { step: "Chẩn đoán", detail: "Đánh giá band hiện tại từng kỹ năng" },
    { step: "Lộ trình", detail: "AI lập kế hoạch học theo band mục tiêu" },
    { step: "Luyện tập", detail: "Đề Reading/Listening, chấm Writing & Speaking" },
    { step: "Sổ lỗi sai", detail: "Lỗi được ghi lại và gắn nhãn phân loại" },
    { step: "Kiểm tra lại", detail: "AI sinh đề ôn từ chính lỗi đã mắc" },
  ],
  features: [
    "AI chấm Writing theo 4 tiêu chí band descriptors",
    "AI chấm Speaking từ ghi âm",
    "Ngân hàng đề Reading & Listening",
    "Brainstorm ý tưởng, sổ từ vựng & quiz",
    "Gamification: xu thưởng, bảng xếp hạng, đổi quà",
    "Tích hợp Google Workspace & Calendar",
  ],
  tech: ["Gemini API", "Google AI Studio", "React", "Express", "PostgreSQL", "Firebase"],
  // What the project demonstrates for a BA / Tester role
  proves: [
    {
      role: "BA",
      title: "Bắt đầu từ nỗi đau thật của người dùng",
      detail:
        "Bài toán xuất phát từ việc trực tiếp dạy 40 học viên, không phải từ công nghệ. Mình hiểu người dùng trước, rồi mới chọn tính năng.",
    },
    {
      role: "BA",
      title: "Biến nhu cầu thành luồng sản phẩm hoàn chỉnh",
      detail:
        "Thiết kế hành trình 5 bước nối liền nhau từ chẩn đoán đến kiểm tra lại, mỗi tính năng đều trả lời một nhu cầu cụ thể thay vì là các chức năng rời rạc.",
    },
    {
      role: "BA",
      title: "Cụ thể hoá quy tắc nghiệp vụ",
      detail:
        "Quy tắc chấm điểm được xây theo band descriptors chính thức và bảng quy đổi điểm Listening, để AI chấm theo tiêu chí rõ ràng thay vì cảm tính.",
    },
    {
      role: "Tester",
      title: "Tư duy vòng lặp lỗi – kiểm tra lại",
      detail:
        "Sổ lỗi sai hoạt động như một bug tracker: lỗi được ghi nhận, gắn nhãn phân loại, rồi sinh đề kiểm tra lại — giống quy trình log bug và re-test.",
    },
    {
      role: "Tester",
      title: "Không tin tuyệt đối vào output của AI",
      detail:
        "AI chấm bài chỉ có giá trị khi kết quả bám đúng tiêu chí. Làm dự án này rèn cho mình thói quen đối chiếu output AI với chuẩn — kỹ năng cốt lõi khi kiểm thử hệ thống có AI.",
    },
    {
      role: "Ghi nhận",
      title: "Được ban giám khảo độc lập đánh giá",
      detail:
        "Lọt Top 50 cả nước cho thấy mình trình bày được vấn đề, giá trị và giải pháp đủ thuyết phục với người ngoài — điều BA làm mỗi ngày với stakeholder.",
    },
  ],
  link: "https://github.com/tinytqa/ielts-practice-web",
  demo: "https://ielts-master-ai-website-luy-n-thi-ielts.ai.studio/",
  certificate: {
    image: "/cert/ai-riser-top50.png",
    pdf: "/cert/ai-riser-top50.pdf",
    caption: "Chứng nhận Top 50 · Google for Developers · 10/2026",
  },
};

// "Currently learning" card under the project list. Fill in course.name / course.link to show the course;
// add finished automation projects to PROJECTS below.
export const AUTOMATION_LEARNING = {
  status: "Đang học",
  title: "Kiểm thử tự động (Automation Test)",
  body: "Bên cạnh kiểm thử thủ công, mình đang tự học automation test qua một khoá học trên Udemy: viết script kiểm thử để chạy lại regression nhanh và ổn định hơn mỗi khi có thay đổi.",
  course: { platform: "Udemy", name: "", link: "" },
  soonTitle: "Dự án automation test",
  soonBody: "Các dự án áp dụng từ khoá học sẽ được cập nhật sớm.",
  soonBadge: "Update soon",
};

// All GitHub projects. category drives the filter tabs; solo = personal vs team project.
export const PROJECT_CATEGORIES = ["Kiểm thử", "AI", "Web app"];

export const PROJECTS = [
  {
    name: "Tester Practice",
    category: "Kiểm thử",
    solo: true,
    purpose: "Luyện kỹ năng kiểm thử một cách có hệ thống: mỗi tuần một kỹ thuật, đi từ unit test, E2E tự động đến kiểm thử hiệu năng.",
    summary: "Chuỗi bài thực hành kiểm thử theo tuần, từ unit test đến E2E và kiểm thử hiệu năng.",
    highlights: [
      "Unit test JUnit 5 bao phủ Normal, Boundary và Exception",
      "E2E Cypress trên SauceDemo: đăng nhập, giỏ hàng, sắp xếp, checkout",
      "JMeter kiểm thử hiệu năng vnexpress.net với 3 kịch bản tải",
    ],
    tags: ["JUnit 5", "Cypress", "JMeter"],
    link: "https://github.com/tinytqa/tester_practice",
  },
  {
    name: "CV Parser & Ranking",
    category: "AI",
    solo: true,
    purpose: "Ý tưởng cá nhân từ quan sát thực tế: mỗi đợt tuyển dụng, HR phải đọc thủ công hàng trăm CV với đủ kiểu định dạng, vừa tốn thời gian vừa dễ bỏ sót ứng viên phù hợp. Mình muốn tự động hoá bước sàng lọc ban đầu để HR tập trung vào việc đánh giá và phỏng vấn.",
    summary: "Công cụ đọc CV, phân tích JD và xếp hạng ứng viên theo mức độ phù hợp, kèm chatbot để HR hỏi nhanh về hồ sơ.",
    highlights: [
      "Trích xuất CV (PDF/Word), dùng Gemini phân tích yêu cầu JD",
      "Lọc 3 tầng BM25 → SBERT → Cohere rerank, có trọng số kỹ năng",
      "Chatbot RAG hỏi đáp hồ sơ; xuất CV chuẩn hoá ra Word",
    ],
    tags: ["Python", "Gemini", "SBERT", "RAG"],
    link: "https://github.com/tinytqa/musical-parakeet-cvparser",
  },
  {
    name: "Sales Management Platform",
    category: "Web app",
    solo: false,
    purpose: "Dự án nhóm môn học: xây dựng hệ thống quản lý bán hàng hoàn chỉnh, chia module và phối hợp theo nhóm như một dự án thực tế.",
    summary: "Hệ thống quản lý bán hàng: sản phẩm, đơn hàng, hoá đơn và chatbot hỗ trợ bán hàng.",
    highlights: [
      "Phát triển module tạo và quản lý đơn hàng",
      "Xuất hoá đơn ra file Word theo template",
      "Tích hợp chatbot và triển khai lên staging",
    ],
    tags: ["Angular", "Spring Boot", "Agile"],
    link: "https://github.com/lhduc2-tech/smp-fe",
  },
  {
    name: "Facial Emotion Recognition",
    category: "AI",
    solo: true,
    purpose: "Dự án cá nhân để tìm hiểu AI Computer Vision: tự áp dụng kiến thức vào một bài toán thực hành, từ huấn luyện mô hình đến triển khai thành web app.",
    summary: "Mô hình ResNet50 nhận diện cảm xúc khuôn mặt, chạy trên desktop và web app Gradio (Hugging Face Spaces).",
    tags: ["PyTorch", "ResNet50", "Gradio"],
    link: "https://github.com/tinytqa/fer",
  },
  {
    name: "School Management",
    category: "Web app",
    solo: false,
    purpose: "Đồ án môn Lập trình Web: xây dựng hệ thống quản lý trường học đầy đủ API, cơ sở dữ liệu và giao diện.",
    summary: "ASP.NET Web API, cơ sở dữ liệu SQL Server và giao diện web, build tự động qua Jenkins.",
    tags: ["ASP.NET", "SQL Server", "Jenkins"],
    link: "https://github.com/tinytqa/crispy-octo-happiness",
  },
  {
    name: "English Learning Website",
    category: "Web app",
    solo: false,
    purpose: "Đồ án môn Lập trình Web: xây dựng nền tảng học tiếng Anh trực tuyến cho học viên và giảng viên.",
    summary: "Gồm khoá học, bài học, quiz, trang giảng viên và thanh toán. Mình tham gia sửa lỗi và hoàn thiện tính năng tìm kiếm.",
    tags: ["ASP.NET API", "JavaScript"],
    link: "https://github.com/tinytqa/ideal-octo-broccoli",
  },
];
