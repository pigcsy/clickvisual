import dataLogsStyles from "@/pages/DataLogs/styles/index.less";
import DataSourceMenu from "@/pages/DataLogs/components/DataSourceMenu";
import SelectedDataBaseDraw from "@/pages/DataLogs/components/SelectedDatabaseDraw";
import classNames from "classnames";
import { useEffect } from "react";
import { useModel } from "@@/plugin-model/useModel";
import RawLogTabs from "@/pages/DataLogs/components/RawLogTabs";
import useLogUrlParams from "@/pages/DataLogs/hooks/useLogUrlParams";

const DataLogs = () => {
  const {
    onChangeCurrentDatabase,
    onChangeVisibleDatabaseDraw,
    logPanesHelper,
  } = useModel("dataLogs");
  useLogUrlParams();
  useEffect(() => {
    return () => {
      onChangeVisibleDatabaseDraw(false);
      onChangeCurrentDatabase(undefined);
      logPanesHelper.resetPane();
    };
  }, []);

  return (
    <div
      className={classNames(
        dataLogsStyles.dataLogsMain,
        dataLogsStyles.siteDrawerInCurrentWrapper,
        dataLogsStyles.menuBtnMain
      )}
    >
      <DataSourceMenu />
      <SelectedDataBaseDraw />
      <RawLogTabs />
    </div>
  );
};
export default DataLogs;
