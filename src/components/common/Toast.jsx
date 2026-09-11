import styled from "styled-components";

const ToastWrapper = styled.div`
  position: fixed;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 20px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1000;
`;

export default function Toast({ message, visible }) {
  return <ToastWrapper $visible={visible}>{message}</ToastWrapper>;
}
