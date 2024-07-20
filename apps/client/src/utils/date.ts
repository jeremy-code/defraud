import dayjs from "dayjs";
import dayjsDevHelper from "dayjs/plugin/devHelper";
import dayjsTimezone from "dayjs/plugin/timezone";
import dayjsUtc from "dayjs/plugin/utc";

dayjs.extend(dayjsDevHelper);
dayjs.extend(dayjsUtc);
dayjs.extend(dayjsTimezone);

dayjs.tz.setDefault(dayjs.tz.guess());

export { dayjs };
