import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import nextArrow from "../../assets/icons/next_arrow.svg";
import { currentLocation } from "../../constants/location";

/* 페이지 전체 - 지도가 남은 세로 공간을 전부 채우도록 flex column */
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

/* "가까운 병원 찾기" 헤더 - 높이 48px, 좌우 20px, 텍스트 세로 중앙 정렬 */
const TitleBar = styled.header`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  background: #fff;
`;

const TitleText = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
`;

/* 지도 영역 - 헤더 아래로 8px 겹치고, 남은 공간을 전부 채움. 플로팅 요소들의 기준점 */
const MapWrapper = styled.div`
  position: relative;
  flex: 1;
  margin-top: -8px;
`;

const MapCanvas = styled.div`
  width: 100%;
  height: 100%;
`;

/* 검색창 - 지도 상단에 플로팅 */
const SearchBar = styled.div`
  position: absolute;
  z-index: 1;
  top: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 16px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px -1px 7px -2px rgba(0, 0, 0, 0.25);
`;

const SearchIcon = styled.svg`
  flex-shrink: 0;
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray900};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

/* 필터 칩 행 - 검색창 아래, 가로 스크롤 */
const FilterRow = styled.div`
  position: absolute;
  z-index: 1;
  top: 68px;
  left: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
`;

const FilterChip = styled.button`
  flex-shrink: 0;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "#FFEDE9" : "#fff")};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.red : theme.colors.gray500};
  box-shadow: 0px -1px 7px -2px rgba(0, 0, 0, 0.25);
`;

/* 확대/축소 버튼 - 지도 우측 중간, 너비 44px(hug) */
const ZoomControl = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 16px;
  transform: translateY(-100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 44px;
  padding: 8px 12px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px -1px 7px -2px rgba(0, 0, 0, 0.25);
`;

const ZoomButton = styled.button`
  width: 100%;
  padding: 4px 0;
  border: none;
  background: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  color: ${({ theme }) => theme.colors.gray900};
  cursor: pointer;
`;

const ZoomDivider = styled.div`
  width: 100%;
  height: 1px;
  margin: 10px 0;
  background: #e5e7eb;
`;

/* 지도 하단에 뜨는 영역 - "목록으로 보기"와 병원 정보 카드를 세로로 쌓음, 사이 16px 간격 */
const FloatingBottomArea = styled.div`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 133px;
  display: flex;
  flex-direction: column;
`;

/* "목록으로 보기 >" - 병원 카드 뒤로 가려서 위쪽 튀어나온 부분만 보임, 텍스트도 그 보이는 부분에 맞춤 */
const ListViewButton = styled.button`
  align-self: flex-end;
  position: relative;
  margin-bottom: -22px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
  padding-top: 6px;
  width: 114px;
  height: 53px;
  border: none;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px -1px 7px -2px rgba(0, 0, 0, 0.25);
  font-size: 13px;
  font-weight: 600;
  color: #B0B8C1;
  cursor: pointer;
`;

const ListViewIcon = styled.img`
  width: 16px;
  height: 16px;
`;

/* 병원 정보 카드 - 패딩 위아래 12px, 좌우 16px. 위에 겹치는 목록 버튼보다 앞에 오도록 쌓임 */
const HospitalCard = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 16px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px -1px 7px -2px rgba(0, 0, 0, 0.25);
`;

const HospitalCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HospitalName = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
`;

const HospitalDistance = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray500};
`;

const HospitalMeta = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray500};
`;

/* 전화하기/길찾기 버튼 행 - gap 12px, 절반씩 */
const HospitalButtonRow = styled.div`
  display: flex;
  gap: 12px;

  > * {
    flex: 1;
  }
`;

/* 전화하기 - 진한 포인트 색상 배경 */
const CallButton = styled.button`
  border: none;
  border-radius: 8px;
  background: #ff4f37;
  padding: 14px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.6;
  color: #fff;
  cursor: pointer;
`;

/* 길찾기 - 연한 포인트 색상 배경 */
const DirectionButton = styled.button`
  border: none;
  border-radius: 8px;
  background: #ffebe9;
  padding: 14px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.6;
  color: #ff4f37;
  cursor: pointer;
`;

/* 더미 데이터 - 필터 칩 목록, API 연동 예정 */
const FILTERS = ["지금 운영 중", "소아 진료", "3km 이내"];

export default function Hospital() {
  const navigate = useNavigate();
  const mapElementRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);

  useEffect(() => {
    if (!window.naver?.maps || !mapElementRef.current) return;

    // 더미 데이터 - src/constants/location.js에서 관리, 추후 백엔드 위치 API로 교체 예정
    mapInstanceRef.current = new window.naver.maps.Map(mapElementRef.current, {
      center: new window.naver.maps.LatLng(
        currentLocation.latitude,
        currentLocation.longitude,
      ),
      zoom: 15,
      zoomControl: false, // 네이버 기본 확대/축소 컨트롤 대신 커스텀 버튼 사용
      // 네이버 지도 로고는 API 이용약관상 필수 표기 요소라 제거하지 않음
    });
  }, []);

  const handleZoomIn = () => {
    const map = mapInstanceRef.current;
    if (map) map.setZoom(map.getZoom() + 1, true);
  };

  const handleZoomOut = () => {
    const map = mapInstanceRef.current;
    if (map) map.setZoom(map.getZoom() - 1, true);
  };

  return (
    <PageWrapper>
      <TitleBar>
        <TitleText>가까운 병원 찾기</TitleText>
      </TitleBar>
      <MapWrapper>
        <MapCanvas ref={mapElementRef} />

        {/* TODO: 틀만 구성 - 실제 검색/필터 연동 예정 */}
        <SearchBar>
          <SearchIcon
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="5.5" stroke="#8B95A1" strokeWidth="1.5" />
            <path
              d="M16 16L12.5 12.5"
              stroke="#8B95A1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </SearchIcon>
          <SearchInput placeholder="병원명 또는 지역 검색" />
        </SearchBar>

        <FilterRow>
          {FILTERS.map((filter) => (
            <FilterChip
              key={filter}
              type="button"
              $active={filter === activeFilter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </FilterChip>
          ))}
        </FilterRow>

        <ZoomControl>
          <ZoomButton type="button" onClick={handleZoomIn} aria-label="확대">
            +
          </ZoomButton>
          <ZoomDivider />
          <ZoomButton type="button" onClick={handleZoomOut} aria-label="축소">
            −
          </ZoomButton>
        </ZoomControl>

        {/* TODO: 틀만 구성 - 실제 병원 목록/선택 연동 예정 */}
        <FloatingBottomArea>
          <ListViewButton
            type="button"
            onClick={() => navigate("/hospital/list")}
          >
            목록으로 보기
            <ListViewIcon src={nextArrow} alt="" />
          </ListViewButton>

          {/* 더미 데이터 - 지도에서 선택된 병원 정보, API 연동 예정 */}
          <HospitalCard>
            <HospitalCardHeader>
              <HospitalName>○○어린이병원 응급실</HospitalName>
              <HospitalDistance>1.2km</HospitalDistance>
            </HospitalCardHeader>
            <HospitalMeta>24시간 운영 · 소아 진료</HospitalMeta>
            <HospitalButtonRow>
              <CallButton type="button">전화하기</CallButton>
              <DirectionButton type="button">길찾기</DirectionButton>
            </HospitalButtonRow>
          </HospitalCard>
        </FloatingBottomArea>
      </MapWrapper>
    </PageWrapper>
  );
}