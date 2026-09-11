import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import ChoiceChip from "../../components/common/ChoiceChip";
import Header from "../../components/header/header";
import CardTitle from "../../components/home/record/form/CardTitle";
import MedicineNameField from "../../components/home/record/form/MedicineNameField";
import MemoBox from "../../components/home/record/form/MemoBox";
import ValueRow from "../../components/home/record/form/ValueRow";
import { childStatus } from "../../constants/childStatus";
import {
  MEDICATION_FORM_DEFAULT,
  PRODUCT_INFO_OPTIONS,
  RECENT_MEDICINES,
} from "../../constants/recordForm";
import { useRecordStore } from "../../store/useRecordStore";
import { buildMedicationRecord } from "../../utils/record";
import { formatShortDateTime } from "../../utils/datetime";

const { medicineName, takenAt, dose, doseUnit, temperatureAtDose } =
  MEDICATION_FORM_DEFAULT;

const DOSE_ROWS = [
  { label: "복용 시각", value: formatShortDateTime(takenAt) },
  { label: "복용량", value: `${dose} ${doseUnit}` },
  { label: "복용 시 체온", value: `${temperatureAtDose}°C` },
];

export default function RecordMedication() {
  const navigate = useNavigate();
  const addRecord = useRecordStore((state) => state.addRecord);
  const [form, setForm] = useState({
    medicineId: MEDICATION_FORM_DEFAULT.medicineId,
    productInfo: null,
    memo: "",
  });

  const updateForm = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSave = () => {
    addRecord(buildMedicationRecord(form));
    navigate(-1);
  };

  return (
    <div className="flex flex-1 flex-col bg-[#FBFBFB]">
      <Header title="복약 기록" />
      <div className="flex flex-1 flex-col gap-[16px] px-[20px] pt-[8px] pb-[117px]">
        <div className="flex w-full items-center gap-[8px]">
          <p className="flex-1 text-[18px] font-bold leading-[27px] text-[#191F28]">
            복용한 약을 기록해 주세요
          </p>
          <ChoiceChip label={childStatus.ageLabel} size="md" selected />
        </div>

        <Card className="flex flex-col gap-[12px] p-[16px]">
          <CardTitle title="복용한 약" />
          <MedicineNameField value={medicineName} actionLabel="직접 입력" />
          <div className="flex items-center gap-[6px]">
            {RECENT_MEDICINES.map((medicine) => (
              <ChoiceChip
                key={medicine.medicineId}
                label={medicine.name}
                size="md"
                selected={medicine.medicineId === form.medicineId}
                onClick={() => updateForm("medicineId", medicine.medicineId)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-[12px]">
            {DOSE_ROWS.map((row) => (
              <ValueRow key={row.label} label={row.label} value={row.value} />
            ))}
          </div>
        </Card>

        <Card className="flex flex-col gap-[10px] p-[16px]">
          <CardTitle title="제품 정보" />
          <p className="text-[13px] leading-[20px] text-[#6B7684]">
            제품명·성분·함량을 확인해 주세요.
          </p>
          <div className="flex items-center gap-[8px]">
            {PRODUCT_INFO_OPTIONS.map((option) => (
              <ChoiceChip
                key={option.value}
                label={option.label}
                size="plain"
                selected={option.value === form.productInfo}
                onClick={() => updateForm("productInfo", option.value)}
              />
            ))}
          </div>
        </Card>

        <MemoBox
          title="추가 메모"
          placeholder="평소와 다른 모습이 있다면 적어 주세요."
          value={form.memo}
          onChange={(value) => updateForm("memo", value)}
        />

        <Button label="복약 기록 저장하기" size="md" onClick={handleSave} />
      </div>
    </div>
  );
}
