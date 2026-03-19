# 📝 모던 투두리스트 (React + Tailwind CSS)

기존의 할 일 관리 로직을 유지하면서, **Tailwind CSS**를 활용해 세련된 UI로 개선하고 **컴포넌트 기반 구조**로 리팩토링한 프로젝트입니다.

## ✨ 주요 기능

- **할 일 등록**: 새로운 할 일을 추가하고 실시간으로 리스트에 반영합니다.
- **할 일 삭제**: 리스트의 각 항목을 선택하여 삭제할 수 있습니다. (ID 중복 버그 해결)
- **완료 체크**: 할 일의 완료 여부를 토글하며, 완료 시 취소선 효과를 적용합니다.
- **로컬 스토리지 연동**: 새로고침을 해도 데이터가 초기화되지 않고 유지됩니다.

## 🛠️ 기술 스택 및 라이브러리

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS (CDN 방식 적용)
- **State Management**: Custom Hook (`useTodos`)

## 📁 프로젝트 구조

기능별로 폴더를 나누어 유지보수가 용이하도록 설계했습니다.

```text
src/
├── components/
│   ├── TodoList.jsx     # 할 일 목록 렌더링 담당
│   └── TodoItem.jsx     # 개별 할 일 항목 및 삭제/체크 기능 담당
├── hooks/
│   └── useTodos.js      # 비즈니스 로직(추가, 삭제, 저장) 분리 (Custom Hook)
├── utils/
│   └── storage.js       # localStorage 접근 헬퍼 함수
├── App.jsx              # 전체 레이아웃 및 입력 폼 구성
└── main.jsx             # 앱 엔트리 포인트
```
