import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import card from "./assets/card.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { StatusBadge } from "@alfalab/core-components/status-badge";
import { useState } from "react";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [selected, setSelected] = useState<null | string>(null);

  const submit = () => {
    setLoading(true);
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Typography.Text tag="p" view="primary-medium" weight="bold">
            Карта для ребёнка
          </Typography.Text>
          <img src={card} alt="Карта для ребенка" style={{ width: "100%" }} />
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="medium"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Детская карта
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" color="secondary">
          Бесплатная карта с кэшбэком
        </Typography.Text>

        <Gap size={12} />

        <div className={appSt.products}>
          <div className={appSt.bonus}>
            <Typography.Text tag="p" view="primary-large" weight="bold">
              5%
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small" color="secondary">
              В трёх категориях на выбор и 1% на все — всегда
            </Typography.Text>
          </div>
          <div className={appSt.bonus}>
            <Typography.Text tag="p" view="primary-large" weight="bold">
              0 ₽
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small" color="secondary">
              Выпуск и обслуживание
            </Typography.Text>
          </div>
        </div>

        <Gap size={20} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Карта в приложении у вас и ребёнка
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" color="secondary">
          Ребёнок видит историю своих покупок и учится управлять тратами
        </Typography.Text>

        <Gap size={20} />
        <div className={appSt.productsTitle}>
          <Typography.TitleResponsive
            font="system"
            tag="h3"
            view="small"
            weight="semibold"
          >
            Категория подарка
          </Typography.TitleResponsive>
        </div>
        <Typography.Text tag="p" view="primary-medium" color="secondary">
          Получите подарок за оформление детской карты. Сначала выберите категорию. Выбор подарка будет доступен на следующем шаге.
        </Typography.Text>

        <div className={appSt.gifts}>
          <div
            className={appSt.gift}
            style={{ ...(selected === "nothing" && { borderColor: "black" }) }}
            onClick={() => setSelected("nothing")}
          >
            {selected === "nothing" && (
              <StatusBadge
                key={20}
                view="positive-checkmark"
                size={20}
                className={appSt.checkMark}
              />
            )}

            <Typography.Text
              tag="p"
              view="primary-small"
              style={{ marginBottom: 0 }}
            >
              Не выбрано
            </Typography.Text>
          </div>
          <div
            className={appSt.gift}
            style={{ ...(selected === "lamoda" && { borderColor: "black" }) }}
            onClick={() => setSelected("lamoda")}
          >
            {selected === "lamoda" && (
              <StatusBadge
                key={20}
                view="positive-checkmark"
                size={20}
                className={appSt.checkMark}
              />
            )}
            <Typography.Text
              tag="p"
              view="primary-small"
              style={{ marginBottom: 0 }}
            >
              Маркетплейсы
            </Typography.Text>
          </div>
          <div
            className={appSt.gift}
            style={{ ...(selected === "dodo" && { borderColor: "black" }) }}
            onClick={() => setSelected("dodo")}
          >
            {selected === "dodo" && (
              <StatusBadge
                key={20}
                view="positive-checkmark"
                size={20}
                className={appSt.checkMark}
              />
            )}
            <Typography.Text
              tag="p"
              view="primary-small"
              style={{ marginBottom: 0 }}
            >
              Еда
            </Typography.Text>
          </div>
          <div
            className={appSt.gift}
            style={{ ...(selected === "gj" && { borderColor: "black" }) }}
            onClick={() => setSelected("gj")}
          >
            {selected === "gj" && (
              <StatusBadge
                key={20}
                view="positive-checkmark"
                size={20}
                className={appSt.checkMark}
              />
            )}
            <Typography.Text
              tag="p"
              view="primary-small"
              style={{ marginBottom: 0 }}
            >
              Одежда
            </Typography.Text>
          </div>
          <div
            className={appSt.gift}
            style={{ ...(selected === "lime" && { borderColor: "black" }) }}
            onClick={() => setSelected("lime")}
          >
            {selected === "lime" && (
              <StatusBadge
                key={20}
                view="positive-checkmark"
                size={20}
                className={appSt.checkMark}
              />
            )}
            <Typography.Text
              tag="p"
              view="primary-small"
              style={{ marginBottom: 0 }}
            >
              Путешествия
            </Typography.Text>
          </div>
          <div
            className={appSt.gift}
            style={{ ...(selected === "deti" && { borderColor: "black" }) }}
            onClick={() => setSelected("deti")}
          >
            {selected === "deti" && (
              <StatusBadge
                key={20}
                view="positive-checkmark"
                size={20}
                className={appSt.checkMark}
              />
            )}
            <Typography.Text
              tag="p"
              view="primary-small"
              style={{ marginBottom: 0 }}
            >
              Образование
            </Typography.Text>
          </div>
          <div
            className={appSt.gift}
            style={{ ...(selected === "litres" && { borderColor: "black" }) }}
            onClick={() => setSelected("litres")}
          >
            {selected === "litres" && (
              <StatusBadge
                key={20}
                view="positive-checkmark"
                size={20}
                className={appSt.checkMark}
              />
            )}
            <Typography.Text
              tag="p"
              view="primary-small"
              style={{ marginBottom: 0 }}
            >
              Спорт
            </Typography.Text>
          </div>
          <div
            className={appSt.gift}
            style={{ ...(selected === "sport" && { borderColor: "black" }) }}
            onClick={() => setSelected("sport")}
          >
            {selected === "sport" && (
              <StatusBadge
                key={20}
                view="positive-checkmark"
                size={20}
                className={appSt.checkMark}
              />
            )}
            <Typography.Text
              tag="p"
              view="primary-small"
              style={{ marginBottom: 0 }}
            >
              Животные
            </Typography.Text>
          </div>
          <div
            className={appSt.gift}
            style={{ ...(selected === "brain" && { borderColor: "black" }) }}
            onClick={() => setSelected("brain")}
          >
            {selected === "brain" && (
              <StatusBadge
                key={20}
                view="positive-checkmark"
                size={20}
                className={appSt.checkMark}
              />
            )}
            <Typography.Text
              tag="p"
              view="primary-small"
              style={{ marginBottom: 0 }}
            >
              Здоровье
            </Typography.Text>
          </div>
        </div>
      </div>

      <Gap size={16} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          loading={loading}
          disabled={!selected}
          block
          view="primary"
          onClick={submit}
        >
          Оформить карту
        </ButtonMobile>
      </div>
    </>
  );
};
